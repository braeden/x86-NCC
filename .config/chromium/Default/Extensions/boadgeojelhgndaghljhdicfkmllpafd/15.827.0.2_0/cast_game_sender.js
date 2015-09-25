(function() {var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var g = g || {};
g.global = this;
g.W = function(a) {
  return void 0 !== a;
};
g.fb = function(a, c, d) {
  a = a.split(".");
  d = d || g.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && g.W(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
g.Ai = function(a, c) {
  g.fb(a, c);
};
g.$ = !0;
g.yh = "en";
g.Xa = !0;
g.Ae = !1;
g.wd = !g.$;
g.Ob = !1;
g.zj = function(a) {
  g.xc(a);
};
g.xc = function(a, c) {
  g.fb(a, c);
};
g.Se = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
g.module = function(a) {
  if (!g.isString(a) || !a || -1 == a.search(g.Se)) {
    throw Error("Invalid module identifier");
  }
  if (!g.If()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (g.G.qb) {
    throw Error("goog.module may only be called once per module.");
  }
  g.G.qb = a;
};
g.module.get = function(a) {
  return g.module.zf(a);
};
g.module.zf = function() {
};
g.G = null;
g.If = function() {
  return null != g.G;
};
g.module.Bc = function() {
  g.G.Bc = !0;
};
g.Jj = function(a) {
  if (g.wd) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
g.Fi = function() {
};
g.Pi = function(a, c) {
  for (var d = a.split("."), e = c || g.global, f;f = d.shift();) {
    if (g.s(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
g.Ti = function(a, c) {
  var d = c || g.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
g.Sh = function(a, c, d, e) {
  if (g.Mb) {
    var f;
    a = a.replace(/\\/g, "/");
    for (var h = g.C, k = 0;f = c[k];k++) {
      h.ma[f] = a, h.rb[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in h.requires || (h.requires[a] = {}), h.requires[a][c] = !0;
    }
  }
};
g.ak = !1;
g.lh = !0;
g.nj = function(a) {
  g.global.console && g.global.console.error(a);
};
g.require = function() {
};
g.Y = "";
g.Sc = function() {
};
g.Rh = function() {
  throw Error("unimplemented abstract method");
};
g.Th = function(a) {
  a.Li = function() {
    if (a.Mc) {
      return a.Mc;
    }
    g.$ && (g.Nc[g.Nc.length] = a);
    return a.Mc = new a;
  };
};
g.Nc = [];
g.Od = !0;
g.xe = g.$;
g.Rf = {};
g.Mb = !1;
g.Mb && (g.C = {rb:{}, ma:{}, requires:{}, hd:{}, Na:{}, xa:{}}, g.Kc = function() {
  var a = g.global.document;
  return "undefined" != typeof a && "write" in a;
}, g.tf = function() {
  if (g.W(g.global.qd)) {
    g.Y = g.global.qd;
  } else {
    if (g.Kc()) {
      for (var a = g.global.document.getElementsByTagName("SCRIPT"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          g.Y = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, g.jb = function(a, c) {
  (g.global.fh || g.Yg)(a, c) && (g.C.Na[a] = !0);
}, g.Ld = !(g.global.atob || !g.global.document || !g.global.document.all), g.Ef = function(a) {
  g.jb("", 'goog.retrieveAndExecModule_("' + a + '");') && (g.C.Na[a] = !0);
}, g.sb = [], g.ck = function(a, c) {
  return g.Od && g.W(g.global.JSON) ? "goog.loadModule(" + g.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, g.Qf = function() {
  var a = g.sb.length;
  if (0 < a) {
    var c = g.sb;
    g.sb = [];
    for (var d = 0;d < a;d++) {
      g.Rc(c[d]);
    }
  }
}, g.pj = function(a) {
  g.Oc(a) && g.Ye(a) && g.Rc(g.Y + g.ib(a));
}, g.Oc = function(a) {
  return (a = g.ib(a)) && g.C.rb[a] ? g.Y + a in g.C.xa : !1;
}, g.Ye = function(a) {
  if ((a = g.ib(a)) && a in g.C.requires) {
    for (var c in g.C.requires[a]) {
      if (!g.Lf(c) && !g.Oc(c)) {
        return !1;
      }
    }
  }
  return !0;
}, g.Rc = function(a) {
  if (a in g.C.xa) {
    var c = g.C.xa[a];
    delete g.C.xa[a];
    g.Bf(c);
  }
}, g.mj = function(a) {
  var c = g.G;
  try {
    g.G = {qb:void 0};
    var d;
    if (g.isFunction(a)) {
      d = a.call(g.global, {});
    } else {
      if (g.isString(a)) {
        d = g.Pf.call(g.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = g.G.qb;
    if (!g.isString(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    g.G.Bc ? g.xc(e, d) : g.xe && Object.seal && Object.seal(d);
    g.Rf[e] = d;
  } finally {
    g.G = c;
  }
}, g.Pf = function(a) {
  eval(a);
  return {};
}, g.Xg = function(a) {
  g.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
}, g.Ze = function(a) {
  var c = g.global.document, d = c.createElement("script");
  d.type = "text/javascript";
  d.src = a;
  d.defer = !1;
  d.async = !1;
  c.head.appendChild(d);
}, g.Yg = function(a, c) {
  if (g.Kc()) {
    var d = g.global.document;
    if (!g.Ob && "complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = g.Ld;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++g.Qc + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : g.Ob ? g.Ze(a) : g.Xg(a) : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return !0;
  }
  return !1;
}, g.Qc = 0, g.wj = function(a, c) {
  "complete" == a.readyState && g.Qc == c && g.Qf();
  return !0;
}, g.dk = function(a) {
  function c(a) {
    if (!(a in f.Na || a in f.hd)) {
      f.hd[a] = !0;
      if (a in f.requires) {
        for (var h in f.requires[a]) {
          if (!g.Lf(h)) {
            if (h in f.ma) {
              c(f.ma[h]);
            } else {
              throw Error("Undefined nameToPath for " + h);
            }
          }
        }
      }
      a in e || (e[a] = !0, d.push(a));
    }
  }
  var d = [], e = {}, f = g.C;
  c(a);
  for (a = 0;a < d.length;a++) {
    var h = d[a];
    g.C.Na[h] = !0;
  }
  var k = g.G;
  g.G = null;
  for (a = 0;a < d.length;a++) {
    if (h = d[a]) {
      f.rb[h] ? g.Ef(g.Y + h) : g.jb(g.Y + h);
    } else {
      throw g.G = k, Error("Undefined script input");
    }
  }
  g.G = k;
}, g.ib = function(a) {
  return a in g.C.ma ? g.C.ma[a] : null;
}, g.tf(), g.global.gh || g.jb(g.Y + "deps.js"));
g.sj = function(a) {
  a = a.split("/");
  for (var c = 0;c < a.length;) {
    "." == a[c] ? a.splice(c, 1) : c && ".." == a[c] && a[c - 1] && ".." != a[c - 1] ? a.splice(--c, 2) : c++;
  }
  return a.join("/");
};
g.lj = function(a) {
  if (g.global.rd) {
    return g.global.rd(a);
  }
  var c = new g.global.XMLHttpRequest;
  c.open("get", a, !1);
  c.send();
  return c.responseText;
};
g.Fj = function() {
};
g.I = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
g.Kf = function(a) {
  return null === a;
};
g.s = function(a) {
  return null != a;
};
g.isArray = function(a) {
  return "array" == g.I(a);
};
g.Da = function(a) {
  var c = g.I(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
g.aj = function(a) {
  return g.isObject(a) && "function" == typeof a.getFullYear;
};
g.isString = function(a) {
  return "string" == typeof a;
};
g.ka = function(a) {
  return "boolean" == typeof a;
};
g.isNumber = function(a) {
  return "number" == typeof a;
};
g.isFunction = function(a) {
  return "function" == g.I(a);
};
g.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
g.Ic = function(a) {
  return a[g.X] || (a[g.X] = ++g.Rg);
};
g.Ui = function(a) {
  return !!a[g.X];
};
g.Gg = function(a) {
  "removeAttribute" in a && a.removeAttribute(g.X);
  try {
    delete a[g.X];
  } catch (c) {
  }
};
g.X = "closure_uid_" + (1E9 * Math.random() >>> 0);
g.Rg = 0;
g.Ki = g.Ic;
g.Dj = g.Gg;
g.jf = function(a) {
  var c = g.I(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.jf(a[d]);
    }
    return c;
  }
  return a;
};
g.bf = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
g.af = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
g.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.bind = g.bf : g.bind = g.af;
  return g.bind.apply(null, arguments);
};
g.ig = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
g.qj = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
g.now = g.Xa && Date.now || function() {
  return +new Date;
};
g.Bf = function(a) {
  if (g.global.execScript) {
    g.global.execScript(a, "JavaScript");
  } else {
    if (g.global.eval) {
      if (null == g.za) {
        if (g.global.eval("var _evalTest_ = 1;"), "undefined" != typeof g.global._evalTest_) {
          try {
            delete g.global._evalTest_;
          } catch (c) {
          }
          g.za = !0;
        } else {
          g.za = !1;
        }
      }
      if (g.za) {
        g.global.eval(a);
      } else {
        var d = g.global.document, e = d.createElement("SCRIPT");
        e.type = "text/javascript";
        e.defer = !1;
        e.appendChild(d.createTextNode(a));
        d.body.appendChild(e);
        d.body.removeChild(e);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
g.za = null;
g.Ji = function(a, c) {
  var d = function(a) {
    return g.Ac[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = g.Ac ? "BY_WHOLE" == g.qf ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
g.Gj = function(a, c) {
  g.Ac = a;
  g.qf = c;
};
g.Ni = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
g.Oi = function(a) {
  return a;
};
g.c = function(a, c, d) {
  g.fb(a, c, d);
};
g.g = function(a, c, d) {
  a[c] = d;
};
g.kb = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Ma = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.$e = function(a, d, h) {
    for (var k = Array(arguments.length - 2), m = 2;m < arguments.length;m++) {
      k[m - 2] = arguments[m];
    }
    return c.prototype[d].apply(a, k);
  };
};
g.$e = function(a, c, d) {
  var e = arguments.callee.caller;
  if (g.Ae || g.$ && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Ma) {
    for (var f = Array(arguments.length - 1), h = 1;h < arguments.length;h++) {
      f[h - 1] = arguments[h];
    }
    return e.Ma.constructor.apply(a, f);
  }
  f = Array(arguments.length - 2);
  for (h = 2;h < arguments.length;h++) {
    f[h - 2] = arguments[h];
  }
  for (var h = !1, k = a.constructor;k;k = k.Ma && k.Ma.constructor) {
    if (k.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return k.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
g.scope = function(a) {
  a.call(g.global);
};
g.Bh = !1;
g.P = function(a, c) {
  var d = c.constructor, e = c.Mg;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = g.P.of(d, a);
  a && g.kb(d, a);
  delete c.constructor;
  delete c.Mg;
  g.P.pc(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : g.P.pc(d, e));
  return d;
};
g.P.we = g.$;
g.P.of = function(a, c) {
  if (g.P.we && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[g.Qe]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[g.X] = c[g.X];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
g.P.Zb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.P.pc = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < g.P.Zb.length;e++) {
    d = g.P.Zb[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
g.Rj = function() {
};
g.Qe = "goog_defineClass_legacy_unsealable";
chrome.cast.Jb = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
g.c("chrome.cast.AutoJoinPolicy", chrome.cast.Jb);
chrome.cast.Nb = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
g.c("chrome.cast.DefaultActionPolicy", chrome.cast.Nb);
chrome.cast.Oa = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
g.c("chrome.cast.Capability", chrome.cast.Oa);
chrome.cast.K = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
g.c("chrome.cast.ErrorCode", chrome.cast.K);
chrome.cast.te = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
g.c("chrome.cast.ReceiverAvailability", chrome.cast.te);
chrome.cast.De = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
g.c("chrome.cast.SenderPlatform", chrome.cast.De);
chrome.cast.ta = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
g.c("chrome.cast.ReceiverType", chrome.cast.ta);
chrome.cast.yd = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
g.c("chrome.cast.DialAppState", chrome.cast.yd);
chrome.cast.se = {CAST:"cast", STOP:"stop"};
g.c("chrome.cast.ReceiverAction", chrome.cast.se);
chrome.cast.ja = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
g.c("chrome.cast.SessionStatus", chrome.cast.ja);
chrome.cast.VERSION = [1, 2];
g.c("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
g.c("chrome.cast.Error", chrome.cast.Error);
chrome.cast.Ce = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
g.c("chrome.cast.SenderApplication", chrome.cast.Ce);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
g.c("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Volume = function(a, c) {
  this.level = g.W(a) ? a : null;
  this.muted = g.W(c) ? c : null;
};
g.c("chrome.cast.Volume", chrome.cast.Volume);
var l = {o:{th:"LAUNCH", jc:"STOP", hc:"SET_VOLUME", Hd:"GET_STATUS", Hh:"RECEIVER_STATUS", Oh:"CONNECT", Ph:"CLOSE", ph:"GET_APP_AVAILABILITY", Td:"LOAD", Ud:"PAUSE", $d:"SEEK", Vd:"PLAY", Wb:"STOP_MEDIA", Ub:"MEDIA_GET_STATUS", Vb:"MEDIA_SET_VOLUME", Sd:"EDIT_TRACKS_INFO", Xd:"QUEUE_LOAD", Wd:"QUEUE_INSERT", Qa:"QUEUE_UPDATE", Yd:"QUEUE_REMOVE", Zd:"QUEUE_REORDER", qh:"INVALID_PLAYER_STATE", xh:"LOAD_FAILED", wh:"LOAD_CANCELLED", rh:"INVALID_REQUEST", Ra:"MEDIA_STATUS", uh:"LAUNCH_ERROR", PING:"PING", 
Eh:"PONG"}, Ta:{}};
l.Ta[l.o.Wb] = l.o.jc;
l.Ta[l.o.Vb] = l.o.hc;
l.Ta[l.o.Ub] = l.o.Hd;
l.nd = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
l.Fe = function(a) {
  this.type = l.o.jc;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.media.be = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
g.c("chrome.cast.media.MediaCommand", chrome.cast.media.be);
chrome.cast.media.L = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
g.c("chrome.cast.media.MetadataType", chrome.cast.media.L);
chrome.cast.media.ha = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
g.c("chrome.cast.media.PlayerState", chrome.cast.media.ha);
chrome.cast.media.Va = {OFF:"REPEAT_OFF", ALL:"REPEAT_ALL", SINGLE:"REPEAT_SINGLE", ALL_AND_SHUFFLE:"REPEAT_ALL_AND_SHUFFLE"};
g.c("chrome.cast.media.RepeatMode", chrome.cast.media.Va);
chrome.cast.media.ve = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
g.c("chrome.cast.media.ResumeState", chrome.cast.media.ve);
chrome.cast.media.Wa = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
g.c("chrome.cast.media.StreamType", chrome.cast.media.Wa);
chrome.cast.media.Md = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
g.c("chrome.cast.media.IdleReason", chrome.cast.media.Md);
chrome.cast.media.Oe = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
g.c("chrome.cast.media.TrackType", chrome.cast.media.Oe);
chrome.cast.media.Le = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
g.c("chrome.cast.media.TextTrackType", chrome.cast.media.Le);
chrome.cast.media.He = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
g.c("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.He);
chrome.cast.media.Me = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
g.c("chrome.cast.media.TextTrackWindowType", chrome.cast.media.Me);
chrome.cast.media.Ie = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
g.c("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.Ie);
chrome.cast.media.Je = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
g.c("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Je);
chrome.cast.media.Rb = function() {
  this.type = l.o.Ub;
  this.customData = null;
};
g.c("chrome.cast.media.GetStatusRequest", chrome.cast.media.Rb);
chrome.cast.media.ac = function() {
  this.type = l.o.Ud;
  this.customData = null;
};
g.c("chrome.cast.media.PauseRequest", chrome.cast.media.ac);
chrome.cast.media.bc = function() {
  this.type = l.o.Vd;
  this.customData = null;
};
g.c("chrome.cast.media.PlayRequest", chrome.cast.media.bc);
chrome.cast.media.Be = function() {
  this.type = l.o.$d;
  this.customData = this.resumeState = this.currentTime = null;
};
g.c("chrome.cast.media.SeekRequest", chrome.cast.media.Be);
chrome.cast.media.lc = function() {
  this.type = l.o.Wb;
  this.customData = null;
};
g.c("chrome.cast.media.StopRequest", chrome.cast.media.lc);
chrome.cast.media.Te = function(a) {
  this.type = l.o.Vb;
  this.volume = a;
  this.customData = null;
};
g.c("chrome.cast.media.VolumeRequest", chrome.cast.media.Te);
chrome.cast.media.Qd = function(a) {
  this.type = l.o.Td;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
g.c("chrome.cast.media.LoadRequest", chrome.cast.media.Qd);
chrome.cast.media.Ed = function(a, c) {
  this.type = l.o.Sd;
  this.requestId = null;
  this.activeTrackIds = a || null;
  this.textTrackStyle = c || null;
};
g.c("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Ed);
chrome.cast.media.ke = function(a) {
  this.type = l.o.Xd;
  this.sessionId = this.requestId = null;
  this.items = a;
  this.startIndex = 0;
  this.repeatMode = chrome.cast.media.Va.OFF;
  this.customData = this.currentTime = null;
};
g.c("chrome.cast.media.QueueLoadRequest", chrome.cast.media.ke);
chrome.cast.media.Ua = function(a) {
  this.type = l.o.Wd;
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = this.currentTime = this.currentItemIndex = this.currentItemId = this.insertBefore = null;
};
g.c("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.Ua);
chrome.cast.media.je = function(a) {
  this.item = a;
  this.customData = this.currentTime = this.insertBefore = null;
};
g.c("chrome.cast.media.QueueInsertAndPlayItemRequest", chrome.cast.media.je);
chrome.cast.media.le = function(a) {
  this.type = l.o.Qa;
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = null;
};
g.c("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.le);
chrome.cast.media.ia = function() {
  this.type = l.o.Qa;
  this.customData = this.currentTime = this.jump = this.currentItemId = this.sessionId = this.requestId = null;
};
g.c("chrome.cast.media.QueueJumpRequest", chrome.cast.media.ia);
chrome.cast.media.gc = function() {
  this.type = l.o.Qa;
  this.customData = this.repeatMode = this.sessionId = this.requestId = null;
};
g.c("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.gc);
chrome.cast.media.ec = function(a) {
  this.type = l.o.Yd;
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = null;
};
g.c("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.ec);
chrome.cast.media.fc = function(a) {
  this.type = l.o.Zd;
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = this.insertBefore = null;
};
g.c("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.fc);
chrome.cast.media.Id = function() {
  this.metadataType = this.type = chrome.cast.media.L.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
g.c("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Id);
chrome.cast.media.de = function() {
  this.metadataType = this.type = chrome.cast.media.L.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
g.c("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.de);
chrome.cast.media.Pe = function() {
  this.metadataType = this.type = chrome.cast.media.L.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
g.c("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Pe);
chrome.cast.media.ee = function() {
  this.metadataType = this.type = chrome.cast.media.L.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
g.c("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.ee);
chrome.cast.media.he = function() {
  this.metadataType = this.type = chrome.cast.media.L.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
g.c("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.he);
chrome.cast.media.ce = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Wa.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
g.c("chrome.cast.media.MediaInfo", chrome.cast.media.ce);
chrome.cast.media.dc = function(a) {
  this.itemId = null;
  this.media = a;
  this.autoplay = !0;
  this.startTime = 0;
  this.playbackDuration = null;
  this.preloadTime = 0;
  this.customData = this.activeTrackIds = null;
};
g.c("chrome.cast.media.QueueItem", chrome.cast.media.dc);
chrome.cast.media.f = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.ha.IDLE;
  this.currentTime = 0;
  this.ob = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Volume;
  this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
  this.repeatMode = chrome.cast.media.Va.OFF;
  this.Ca = this.pb = !1;
  this.qa = [];
};
g.c("chrome.cast.media.Media", chrome.cast.media.f);
chrome.cast.media.vd = "CC1AD845";
g.c("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.vd);
chrome.cast.media.timeout = {};
g.c("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
g.g(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.Ba = 0;
g.g(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.Ba);
chrome.cast.media.timeout.play = 0;
g.g(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
g.g(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
g.g(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
g.g(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.La = 0;
g.g(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.La);
chrome.cast.media.timeout.ya = 0;
g.g(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.ya);
chrome.cast.media.timeout.D = 0;
g.g(chrome.cast.media.timeout, "queue", chrome.cast.media.timeout.D);
chrome.cast.media.Ne = function(a, c) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
g.c("chrome.cast.media.Track", chrome.cast.media.Ne);
chrome.cast.media.Ke = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
g.c("chrome.cast.media.TextTrackStyle", chrome.cast.media.Ke);
chrome.cast.ld = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Jb.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Nb.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
g.c("chrome.cast.ApiConfig", chrome.cast.ld);
chrome.cast.Bd = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
g.c("chrome.cast.DialRequest", chrome.cast.Bd);
chrome.cast.zd = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
g.c("chrome.cast.DialLaunchData", chrome.cast.zd);
chrome.cast.Ad = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
g.c("chrome.cast.DialLaunchResponse", chrome.cast.Ad);
chrome.cast.Ee = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Oa.VIDEO_OUT, chrome.cast.Oa.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.da;
  this.language = null;
};
g.c("chrome.cast.SessionRequest", chrome.cast.Ee);
chrome.cast.re = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.ta.CAST;
  this.ipAddress = this.displayStatus = this.isActiveInput = null;
};
g.c("chrome.cast.Receiver", chrome.cast.re);
chrome.cast.ue = function(a, c) {
  this.statusText = a;
  this.appImages = c;
  this.showStop = null;
};
g.c("chrome.cast.ReceiverDisplayStatus", chrome.cast.ue);
chrome.cast.j = function(a, c, d, e, f) {
  this.sessionId = a;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.ja.CONNECTED;
  this.transportId = "";
};
g.c("chrome.cast.Session", chrome.cast.j);
chrome.cast.j.Lb = "custom_receiver_session_id";
g.g(chrome.cast.j, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.j.Lb);
chrome.cast.timeout = {};
g.c("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.da = 1E4;
g.g(chrome.cast.timeout, "requestSession", chrome.cast.timeout.da);
chrome.cast.timeout.la = 3E3;
g.g(chrome.cast.timeout, "leaveSession", chrome.cast.timeout.la);
chrome.cast.timeout.cd = 3E3;
g.g(chrome.cast.timeout, "stopSession", chrome.cast.timeout.cd);
chrome.cast.timeout.fa = 3E3;
g.g(chrome.cast.timeout, "setReceiverVolume", chrome.cast.timeout.fa);
chrome.cast.timeout.zb = 3E3;
g.g(chrome.cast.timeout, "sendCustomMessage", chrome.cast.timeout.zb);
chrome.cast.ae = "mirror_app_id";
g.c("chrome.cast.MIRROR_APP_ID", chrome.cast.ae);
l.md = function(a) {
  this.sessionRequest = a.sessionRequest;
  this.autoJoinPolicy = a.autoJoinPolicy;
  this.defaultActionPolicy = a.defaultActionPolicy;
  this.useCustomDialLaunch = !!a.customDialLaunchCallback;
  this.isTopLevelWindow = window.self == window.top;
};
l.kc = function(a, c) {
  this.type = l.o.hc;
  this.requestId = null;
  this.volume = a;
  this.expectedVolume = c || null;
};
g.debug = {};
g.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, g.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
g.kb(g.debug.Error, Error);
g.debug.Error.prototype.name = "CustomError";
g.Cc = {};
g.Cc.ge = {Cd:1, ah:2, TEXT:3, bh:4, nh:5, mh:6, Fh:7, hh:8, ih:9, kh:10, jh:11, Dh:12};
g.a = {};
g.a.Pa = !1;
g.a.Gd = !1;
g.a.Re = {fe:"\u00a0"};
g.a.startsWith = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.a.endsWith = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
g.a.mi = function(a, c) {
  return 0 == g.a.tc(c, a.substr(0, c.length));
};
g.a.ki = function(a, c) {
  return 0 == g.a.tc(c, a.substr(a.length - c.length, c.length));
};
g.a.li = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.a.Ng = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
g.a.si = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
g.a.mb = function(a) {
  return /^[\s\xa0]*$/.test(a);
};
g.a.cj = function(a) {
  return 0 == a.length;
};
g.a.Pc = g.a.mb;
g.a.Gf = function(a) {
  return g.a.mb(g.a.Sf(a));
};
g.a.bj = g.a.Gf;
g.a.$i = function(a) {
  return !/[^\t\n\r ]/.test(a);
};
g.a.Yi = function(a) {
  return !/[^a-zA-Z]/.test(a);
};
g.a.fj = function(a) {
  return !/[^0-9]/.test(a);
};
g.a.Zi = function(a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
g.a.hj = function(a) {
  return " " == a;
};
g.a.ij = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
g.a.Pj = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
g.a.hi = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
g.a.uj = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
g.a.tj = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
g.a.ri = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
g.a.trim = g.Xa && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
g.a.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
g.a.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
g.a.tc = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
g.a.Uc = /(\.\d+)|(\d+)|(\D+)/g;
g.a.vj = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(g.a.Uc), e = c.toLowerCase().match(g.a.Uc), f = Math.min(d.length, e.length), h = 0;h < f;h++) {
    var k = d[h], m = e[h];
    if (k != m) {
      return d = parseInt(k, 10), !isNaN(d) && (e = parseInt(m, 10), !isNaN(e) && d - e) ? d - e : k < m ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
g.a.$j = function(a) {
  return encodeURIComponent(String(a));
};
g.a.Zj = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
g.a.Vf = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
g.a.Jc = function(a, c) {
  if (c) {
    a = a.replace(g.a.Hb, "&amp;").replace(g.a.Tb, "&lt;").replace(g.a.Qb, "&gt;").replace(g.a.cc, "&quot;").replace(g.a.ic, "&#39;").replace(g.a.Yb, "&#0;"), g.a.Pa && (a = a.replace(g.a.Pb, "&#101;"));
  } else {
    if (!g.a.jd.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(g.a.Hb, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(g.a.Tb, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(g.a.Qb, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(g.a.cc, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(g.a.ic, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(g.a.Yb, "&#0;"));
    g.a.Pa && -1 != a.indexOf("e") && (a = a.replace(g.a.Pb, "&#101;"));
  }
  return a;
};
g.a.Hb = /&/g;
g.a.Tb = /</g;
g.a.Qb = />/g;
g.a.cc = /"/g;
g.a.ic = /'/g;
g.a.Yb = /\x00/g;
g.a.Pb = /e/g;
g.a.jd = g.a.Pa ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
g.a.Gb = function(a) {
  return g.a.contains(a, "&") ? !g.a.Gd && "document" in g.global ? g.a.ed(a) : g.a.Sg(a) : a;
};
g.a.Yj = function(a, c) {
  return g.a.contains(a, "&") ? g.a.ed(a, c) : a;
};
g.a.ed = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : g.global.document.createElement("div");
  return a.replace(g.a.Kd, function(a, c) {
    var k = d[a];
    if (k) {
      return k;
    }
    if ("#" == c.charAt(0)) {
      var m = Number("0" + c.substr(1));
      isNaN(m) || (k = String.fromCharCode(m));
    }
    k || (e.innerHTML = a + " ", k = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = k;
  });
};
g.a.Sg = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
g.a.Kd = /&([^;\s<&]+);?/g;
g.a.bk = function(a, c) {
  return g.a.Vf(a.replace(/  /g, " &#160;"), c);
};
g.a.yj = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + g.a.Re.fe);
};
g.a.Qj = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
g.a.truncate = function(a, c, d) {
  d && (a = g.a.Gb(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = g.a.Jc(a));
  return a;
};
g.a.Xj = function(a, c, d, e) {
  d && (a = g.a.Gb(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = g.a.Jc(a));
  return a;
};
g.a.Eb = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
g.a.Fa = {"'":"\\'"};
g.a.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = g.a.Eb[e] || (31 < f && 127 > f ? e : g.a.Dc(e));
  }
  c.push('"');
  return c.join("");
};
g.a.Ci = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = g.a.Dc(a.charAt(d));
  }
  return c.join("");
};
g.a.Dc = function(a) {
  if (a in g.a.Fa) {
    return g.a.Fa[a];
  }
  if (a in g.a.Eb) {
    return g.a.Fa[a] = g.a.Eb[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return g.a.Fa[a] = c;
};
g.a.contains = function(a, c) {
  return -1 != a.indexOf(c);
};
g.a.ji = function(a, c) {
  return g.a.contains(a.toLowerCase(), c.toLowerCase());
};
g.a.xi = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
g.a.na = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
g.a.remove = function(a, c) {
  var d = new RegExp(g.a.tb(c), "");
  return a.replace(d, "");
};
g.a.removeAll = function(a, c) {
  var d = new RegExp(g.a.tb(c), "g");
  return a.replace(d, "");
};
g.a.tb = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
g.a.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
g.a.xj = function(a, c, d) {
  a = g.W(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return g.a.repeat("0", Math.max(0, c - d)) + a;
};
g.a.Sf = function(a) {
  return null == a ? "" : String(a);
};
g.a.gi = function(a) {
  return Array.prototype.join.call(arguments, "");
};
g.a.Qi = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.now()).toString(36);
};
g.a.ui = function(a, c) {
  for (var d = 0, e = g.a.trim(String(a)).split("."), f = g.a.trim(String(c)).split("."), h = Math.max(e.length, f.length), k = 0;0 == d && k < h;k++) {
    var m = e[k] || "", n = f[k] || "", p = /(\d*)(\D*)/g, t = /(\d*)(\D*)/g;
    do {
      var q = p.exec(m) || ["", "", ""], r = t.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == r[0].length) {
        break;
      }
      d = g.a.bb(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || g.a.bb(0 == q[2].length, 0 == r[2].length) || g.a.bb(q[2], r[2]);
    } while (0 == d);
  }
  return d;
};
g.a.bb = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
g.a.Jd = 4294967296;
g.a.Vi = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= g.a.Jd;
  }
  return c;
};
g.a.Tg = 2147483648 * Math.random() | 0;
g.a.zi = function() {
  return "goog_" + g.a.Tg++;
};
g.a.Tj = function(a) {
  var c = Number(a);
  return 0 == c && g.a.mb(a) ? NaN : c;
};
g.a.ej = function(a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
g.a.jj = function(a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
g.a.Sj = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
g.a.Vj = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
g.a.Wj = function(a, c) {
  var d = g.isString(c) ? g.a.tb(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
g.a.ii = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
g.a.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return g.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
g.a.Nj = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
g.a.Bi = function(a, c) {
  var d = [], e = [];
  if (a == c) {
    return 0;
  }
  if (!a.length || !c.length) {
    return Math.max(a.length, c.length);
  }
  for (var f = 0;f < c.length + 1;f++) {
    d[f] = f;
  }
  for (f = 0;f < a.length;f++) {
    e[0] = f + 1;
    for (var h = 0;h < c.length;h++) {
      e[h + 1] = Math.min(e[h] + 1, d[h + 1] + 1, d[h] + (a[f] != c[h]));
    }
    for (h = 0;h < d.length;h++) {
      d[h] = e[h];
    }
  }
  return e[c.length];
};
g.h = {};
g.h.J = g.$;
g.h.ra = function(a, c) {
  c.unshift(a);
  g.debug.Error.call(this, g.a.Ng.apply(null, c));
  c.shift();
};
g.kb(g.h.ra, g.debug.Error);
g.h.ra.prototype.name = "AssertionError";
g.h.ud = function(a) {
  throw a;
};
g.h.eb = g.h.ud;
g.h.T = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), h = e
  } else {
    a && (f += ": " + a, h = c);
  }
  a = new g.h.ra("" + f, h || []);
  g.h.eb(a);
};
g.h.Hj = function(a) {
  g.h.J && (g.h.eb = a);
};
g.h.assert = function(a, c, d) {
  g.h.J && !a && g.h.T("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.sf = function(a, c) {
  g.h.J && g.h.eb(new g.h.ra("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
g.h.Zh = function(a, c, d) {
  g.h.J && !g.isNumber(a) && g.h.T("Expected number but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.bi = function(a, c, d) {
  g.h.J && !g.isString(a) && g.h.T("Expected string but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Xh = function(a, c, d) {
  g.h.J && !g.isFunction(a) && g.h.T("Expected function but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.$h = function(a, c, d) {
  g.h.J && !g.isObject(a) && g.h.T("Expected object but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Uh = function(a, c, d) {
  g.h.J && !g.isArray(a) && g.h.T("Expected array but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Vh = function(a, c, d) {
  g.h.J && !g.ka(a) && g.h.T("Expected boolean but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Wh = function(a, c, d) {
  !g.h.J || g.isObject(a) && a.nodeType == g.Cc.ge.Cd || g.h.T("Expected Element but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Yh = function(a, c, d, e) {
  !g.h.J || a instanceof c || g.h.T("Expected instanceof %s but got %s.", [g.h.Hc(c), g.h.Hc(a)], d, Array.prototype.slice.call(arguments, 3));
  return a;
};
g.h.ai = function() {
  for (var a in Object.prototype) {
    g.h.sf(a + " should not be enumerable in Object.prototype.");
  }
};
g.h.Hc = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
g.b = {};
g.S = g.Xa;
g.b.R = !1;
g.b.jg = function(a) {
  return a[a.length - 1];
};
g.b.kj = g.b.jg;
g.b.l = Array.prototype;
g.b.indexOf = g.S && (g.b.R || g.b.l.indexOf) ? function(a, c, d) {
  return g.b.l.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
g.b.lastIndexOf = g.S && (g.b.R || g.b.l.lastIndexOf) ? function(a, c, d) {
  return g.b.l.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
g.b.forEach = g.S && (g.b.R || g.b.l.forEach) ? function(a, c, d) {
  g.b.l.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in f && c.call(d, f[h], h, a);
  }
};
g.b.Gc = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
g.b.filter = g.S && (g.b.R || g.b.l.filter) ? function(a, c, d) {
  return g.b.l.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], h = 0, k = g.isString(a) ? a.split("") : a, m = 0;m < e;m++) {
    if (m in k) {
      var n = k[m];
      c.call(d, n, m, a) && (f[h++] = n);
    }
  }
  return f;
};
g.b.map = g.S && (g.b.R || g.b.l.map) ? function(a, c, d) {
  return g.b.l.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), h = g.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    k in h && (f[k] = c.call(d, h[k], k, a));
  }
  return f;
};
g.b.reduce = g.S && (g.b.R || g.b.l.reduce) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.b.l.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.b.forEach(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.b.reduceRight = g.S && (g.b.R || g.b.l.reduceRight) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.b.l.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.b.Gc(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.b.some = g.S && (g.b.R || g.b.l.some) ? function(a, c, d) {
  return g.b.l.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return !0;
    }
  }
  return !1;
};
g.b.every = g.S && (g.b.R || g.b.l.every) ? function(a, c, d) {
  return g.b.l.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && !c.call(d, f[h], h, a)) {
      return !1;
    }
  }
  return !0;
};
g.b.count = function(a, c, d) {
  var e = 0;
  g.b.forEach(a, function(a, h, k) {
    c.call(d, a, h, k) && ++e;
  }, d);
  return e;
};
g.b.find = function(a, c, d) {
  c = g.b.Fc(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.b.Fc = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return h;
    }
  }
  return -1;
};
g.b.Di = function(a, c, d) {
  c = g.b.uf(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.b.uf = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return -1;
};
g.b.contains = function(a, c) {
  return 0 <= g.b.indexOf(a, c);
};
g.b.Pc = function(a) {
  return 0 == a.length;
};
g.b.clear = function(a) {
  if (!g.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
g.b.insert = function(a, c) {
  g.b.contains(a, c) || a.push(c);
};
g.b.Lc = function(a, c, d) {
  g.b.splice(a, d, 0, c);
};
g.b.Wi = function(a, c, d) {
  g.ig(g.b.splice, a, d, 0).apply(null, c);
};
g.b.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = g.b.indexOf(a, d)) ? a.push(c) : g.b.Lc(a, c, e);
};
g.b.remove = function(a, c) {
  var d = g.b.indexOf(a, c), e;
  (e = 0 <= d) && g.b.na(a, d);
  return e;
};
g.b.na = function(a, c) {
  return 1 == g.b.l.splice.call(a, c, 1).length;
};
g.b.Ej = function(a, c, d) {
  c = g.b.Fc(a, c, d);
  return 0 <= c ? (g.b.na(a, c), !0) : !1;
};
g.b.Bj = function(a, c, d) {
  var e = 0;
  g.b.Gc(a, function(f, h) {
    c.call(d, f, h, a) && g.b.na(a, h) && e++;
  });
  return e;
};
g.b.concat = function(a) {
  return g.b.l.concat.apply(g.b.l, arguments);
};
g.b.join = function(a) {
  return g.b.l.concat.apply(g.b.l, arguments);
};
g.b.Pg = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return [];
};
g.b.clone = g.b.Pg;
g.b.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d];
    if (g.Da(e)) {
      var f = a.length || 0, h = e.length || 0;
      a.length = f + h;
      for (var k = 0;k < h;k++) {
        a[f + k] = e[k];
      }
    } else {
      a.push(e);
    }
  }
};
g.b.splice = function(a, c, d, e) {
  return g.b.l.splice.apply(a, g.b.slice(arguments, 1));
};
g.b.slice = function(a, c, d) {
  return 2 >= arguments.length ? g.b.l.slice.call(a, c) : g.b.l.slice.call(a, c, d);
};
g.b.Cj = function(a, c, d) {
  c = c || a;
  var e = function(a) {
    return g.isObject(a) ? "o" + g.Ic(a) : (typeof a).charAt(0) + a;
  };
  d = d || e;
  for (var e = {}, f = 0, h = 0;h < a.length;) {
    var k = a[h++], m = d(k);
    Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, c[f++] = k);
  }
  c.length = f;
};
g.b.qc = function(a, c, d) {
  return g.b.rc(a, d || g.b.V, !1, c);
};
g.b.ei = function(a, c, d) {
  return g.b.rc(a, c, !0, void 0, d);
};
g.b.rc = function(a, c, d, e, f) {
  for (var h = 0, k = a.length, m;h < k;) {
    var n = h + k >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? h = n + 1 : (k = n, m = !p);
  }
  return m ? h : ~h;
};
g.b.sort = function(a, c) {
  a.sort(c || g.b.V);
};
g.b.Oj = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || g.b.V;
  g.b.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
g.b.Lg = function(a, c, d) {
  var e = d || g.b.V;
  g.b.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
g.b.Mj = function(a, c, d) {
  g.b.Lg(a, function(a) {
    return a[c];
  }, d);
};
g.b.gj = function(a, c, d) {
  c = c || g.b.V;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return !1;
    }
  }
  return !0;
};
g.b.equals = function(a, c, d) {
  if (!g.Da(a) || !g.Da(c) || a.length != c.length) {
    return !1;
  }
  var e = a.length;
  d = d || g.b.rf;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return !1;
    }
  }
  return !0;
};
g.b.ti = function(a, c, d) {
  d = d || g.b.V;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var h = d(a[f], c[f]);
    if (0 != h) {
      return h;
    }
  }
  return g.b.V(a.length, c.length);
};
g.b.V = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
g.b.Xi = function(a, c) {
  return -g.b.V(a, c);
};
g.b.rf = function(a, c) {
  return a === c;
};
g.b.ci = function(a, c, d) {
  d = g.b.qc(a, c, d);
  return 0 > d ? (g.b.Lc(a, c, -(d + 1)), !0) : !1;
};
g.b.di = function(a, c, d) {
  c = g.b.qc(a, c, d);
  return 0 <= c ? g.b.na(a, c) : !1;
};
g.b.fi = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var h = a[f], k = c.call(d, h, f, a);
    g.W(k) && (e[k] || (e[k] = [])).push(h);
  }
  return e;
};
g.b.Uj = function(a, c, d) {
  var e = {};
  g.b.forEach(a, function(f, h) {
    e[c.call(d, f, h, a)] = f;
  });
  return e;
};
g.b.Aj = function(a, c, d) {
  var e = [], f = 0, h = a;
  d = d || 1;
  void 0 !== c && (f = a, h = c);
  if (0 > d * (h - f)) {
    return [];
  }
  if (0 < d) {
    for (a = f;a < h;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > h;a += d) {
      e.push(a);
    }
  }
  return e;
};
g.b.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
g.b.wf = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (g.isArray(e)) {
      for (var f = 0;f < e.length;f += 8192) {
        for (var h = g.b.wf.apply(null, g.b.slice(e, f, f + 8192)), k = 0;k < h.length;k++) {
          c.push(h[k]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
g.b.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? g.b.l.unshift.apply(a, a.splice(-c, c)) : 0 > c && g.b.l.push.apply(a, a.splice(0, -c)));
  return a;
};
g.b.rj = function(a, c, d) {
  c = g.b.l.splice.call(a, c, 1);
  g.b.l.splice.call(a, d, 0, c[0]);
};
g.b.ek = function(a) {
  if (!arguments.length) {
    return [];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var h = arguments[f];
      if (d >= h.length) {
        return c;
      }
      e.push(h[d]);
    }
    c.push(e);
  }
};
g.b.Lj = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), h = a[e];
    a[e] = a[f];
    a[f] = h;
  }
};
g.b.wi = function(a, c) {
  var d = [];
  g.b.forEach(c, function(c) {
    d.push(a[c]);
  });
  return d;
};
g.object = {};
g.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
g.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
g.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
g.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return !0;
    }
  }
  return !1;
};
g.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return !1;
    }
  }
  return !0;
};
g.object.Ii = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
g.object.Gi = function(a) {
  for (var c in a) {
    return c;
  }
};
g.object.Hi = function(a) {
  for (var c in a) {
    return a[c];
  }
};
g.object.contains = function(a, c) {
  return g.object.yc(a, c);
};
g.object.Si = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
g.object.Mi = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
g.object.Ri = function(a, c) {
  for (var d = g.Da(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], g.W(a));d++) {
  }
  return a;
};
g.object.vi = function(a, c) {
  return c in a;
};
g.object.yc = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return !0;
    }
  }
  return !1;
};
g.object.vf = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
g.object.Ei = function(a, c, d) {
  return (c = g.object.vf(a, c, d)) && a[c];
};
g.object.Pc = function(a) {
  for (var c in a) {
    return !1;
  }
  return !0;
};
g.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
g.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
g.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  g.object.set(a, c, d);
};
g.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
g.object.set = function(a, c, d) {
  a[c] = d;
};
g.object.Ij = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
g.object.Kj = function(a, c, d) {
  if (c in a) {
    return a[c];
  }
  d = d();
  return a[c] = d;
};
g.object.equals = function(a, c) {
  for (var d in a) {
    if (!(d in c) || a[d] !== c[d]) {
      return !1;
    }
  }
  for (d in c) {
    if (!(d in a)) {
      return !1;
    }
  }
  return !0;
};
g.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
g.object.Ug = function(a) {
  var c = g.I(a);
  if ("object" == c || "array" == c) {
    if (g.isFunction(a.clone)) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.object.Ug(a[d]);
    }
    return c;
  }
  return a;
};
g.object.Qg = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
g.object.$b = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var h = 0;h < g.object.$b.length;h++) {
      d = g.object.$b[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
g.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
g.object.pf = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.pf.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
g.object.yi = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
g.object.dj = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
l.v = {};
l.v.Sa = "urn:x-cast:";
l.v.Rd = 128;
l.v.Nf = function(a) {
  return a.length > l.v.Sa.length && g.a.startsWith(a, l.v.Sa) && a.length <= l.v.Rd;
};
l.v.aa = function(a) {
  return l.v.Sa + "com.google.cast." + a;
};
l.v.td = {Mh:l.v.aa("tp.connection"), Nh:l.v.aa("tp.heartbeat"), Gh:l.v.aa("receiver"), zh:l.v.aa("media"), Ah:l.v.aa("media.universalRemote.optIn"), Qh:l.v.aa("webrtc")};
l.v.Ge = g.object.Qg(l.v.td);
l.v.Ff = function(a) {
  return l.v.Ge.hasOwnProperty(a);
};
l.u = {};
l.u.oi = function(a) {
  return a ? g.isString(a.sessionId) ? g.s(a.media) ? g.s(a.autoplay) && !g.ka(a.autoplay) ? "Invalid autoplay in LoadRequest." : g.s(a.currentTime) && !g.isNumber(a.currentTime) ? "Invalid currentTime in LoadRequest." : l.u.uc(a.media) : "media cannot be null or undefined in LoadRequest." : "Invalid sessionId in LoadRequest." : "LoadRequest cannot be null.";
};
l.u.pi = function(a) {
  if (!a) {
    return "QueueLoadRequest cannot be null.";
  }
  if (!g.isString(a.sessionId)) {
    return "Invalid sessionId in QueueLoadRequest.";
  }
  if (!g.s(a.items) || 0 >= a.items.length) {
    return "items cannot be null or undefined or empty in QueueLoadRequest.";
  }
  if (!g.s(a.repeatMode) || !g.isString(a.repeatMode)) {
    return "Invalid repeatMode in QueueLoadRequest.";
  }
  if (!g.s(a.startIndex) || !g.isNumber(a.startIndex) || 0 > a.startIndex || a.startIndex >= a.items.length) {
    return "Invalid startIndex in QueueLoadRequest.";
  }
  for (var c = 0;c < a.items.length;c++) {
    var d = l.u.gf(!1, a.items[c]);
    if ("" != d) {
      return "At index " + c + ": " + d;
    }
  }
  return "";
};
l.u.uc = function(a) {
  return a ? !g.isString(a.contentId) || 1E3 < a.contentId.length ? "Invalid contentId in MediaInfo." : g.object.yc(chrome.cast.media.Wa, a.streamType) ? g.isString(a.contentType) ? g.s(a.duration) && !g.isNumber(a.duration) ? "Invalid duration in MediaInfo." : "" : "Invalid contentType in MediaInfo." : "Invalid streamType in MediaInfo." : "MediaInfo cannot be null.";
};
l.u.gf = function(a, c) {
  if (!c) {
    return "QueueItem cannot be null.";
  }
  if (a) {
    if (g.s(c.itemId) && !g.isNumber(c.itemId)) {
      return "Invalid itemId in QueueItem.";
    }
  } else {
    if (g.s(c.itemId)) {
      return "itemId cannot be set in QueueItem.";
    }
  }
  return g.s(c.autoplay) && g.ka(c.autoplay) ? !g.s(c.startTime) || !g.isNumber(c.startTime) || 0 > c.startTime ? "Invalid startTime in QueueItem." : g.s(c.playbackDuration) && !g.isNumber(c.playbackDuration) ? "Invalid playbackDuration in QueueItem." : !g.s(c.preloadTime) || !g.isNumber(c.preloadTime) || 0 > c.preloadTime ? "Invalid preloadTime in QueueItem." : l.u.uc(c.media) : "Invalid autoplay in QueueItem.";
};
l.u.ef = function(a) {
  return !!a && g.s(a.sessionId) && g.isString(a.namespaceName) && l.v.Nf(a.namespaceName) && !l.v.Ff(a.namespaceName);
};
l.u.df = function(a) {
  return a && g.isFunction(a.sessionListener) && g.isFunction(a.receiverListener) ? l.u.vc(a.sessionRequest) : !1;
};
l.u.ff = function(a) {
  return a ? !g.b.find(a, function(a) {
    return !((a.receiverType == chrome.cast.ta.CUSTOM || a.receiverType == chrome.cast.ta.DIAL) && g.s(a.friendlyName) && 0 == a.capabilities.length && g.Kf(a.volume));
  }) : !1;
};
l.u.vc = function(a) {
  return !a || !g.s(a.appId) || g.s(a.dialRequest) && (!g.isString(a.dialRequest.appName) || g.s(a.dialRequest.launchParameter) && !g.isString(a.dialRequest.launchParameter)) ? !1 : !0;
};
l.u.hf = function(a) {
  return a && g.s(a.volume) && l.u.wc(a.volume) ? g.s(a.expectedVolume) ? l.u.wc(a.expectedVolume) : !0 : !1;
};
l.u.wc = function(a) {
  return a ? g.s(a.level) ? g.isNumber(a.level) && 0 <= a.level && 1 >= a.level : g.ka(a.muted) : !1;
};
l.u.ni = function(a) {
  return !!a && g.ka(a.doLaunch) && (!g.s(a.launchParameter) || g.isString(a.launchParameter));
};
l.sh = {};
l.F = function(a, c, d, e, f, h) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = g.isNumber(f) ? f : 0;
  this.receiverId = h || null;
  this.receiverList = null;
};
l.m = {Sb:"iframe_init_result", Fd:"fail_to_connect_to_extension", eh:"client_reconnect", ua:"v2_message", Ib:"app_message", pd:"client_init", Pd:"log_message", pe:"request_session", qe:"request_session_by_id", Nd:"leave_session", dh:"client_disconnect", ye:"set_custom_receivers", Kb:"custom_dial_launch_response", ze:"set_receiver_display_status", ie:"query_tab_broadcast_status", oh:"extension_ready", Zg:"api_iframe_ready", ne:"receiver_availability", me:"receiver_action", Xb:"new_session", mc:"update_session", 
xd:"disconnect_session", oe:"remove_session", $g:"app_message_success", vh:"leave_session_success", Kh:"set_receiver_volume_success", Ih:"set_custom_receivers_success", ERROR:"error", sd:"custom_dial_launch_request", Jh:"set_receiver_display_status_success", Lh:"tab_broadcast_status"};
l.Ch = function() {
  this.type = l.o.Ra;
  this.requestId = null;
  this.status = [];
  this.customData = null;
  this.sessionId = "";
};
chrome.cast.ga = function(a, c) {
  this.Df = a;
  this.oc = c;
  this.nc = null;
};
chrome.cast.ga.prototype.init = function() {
  window.addEventListener("message", this.$f.bind(this), !1);
};
chrome.cast.ga.prototype.Ig = function(a) {
  this.nc = a;
};
chrome.cast.ga.prototype.$f = function(a) {
  a.source != window && a.origin == this.oc && (a = a.data, a.type == l.m.Sb && (this.Hf = !a.message), this.nc(a));
};
chrome.cast.ga.prototype.Ab = function(a) {
  this.Hf && this.Df.contentWindow.postMessage(a, this.oc);
};
l.A = function(a, c, d) {
  this.dd = a;
  this.cb = c;
  this.Fb = g.isNumber(d) ? d : 0;
  this.Ea = !1;
  this.pa = null;
};
l.A.od = 432E5;
l.A.prototype.Mf = function() {
  return this.Ea;
};
l.A.prototype.yb = function() {
  this.Ea = !0;
  this.cb = this.dd = null;
  this.pa && (clearTimeout(this.pa), this.pa = null);
};
l.A.Tc = function() {
};
l.A.prototype.gd = function() {
  var a = this.dd;
  this.yb();
  return a || l.A.Tc;
};
l.A.prototype.fd = function() {
  var a = this.cb;
  this.yb();
  return a || l.A.Tc;
};
l.A.prototype.bd = function(a, c) {
  if (!this.Ea && !this.pa) {
    var d = function() {
      if (!this.Ea) {
        a && a();
        var d = this.cb;
        this.yb();
        if (0 < this.Fb) {
          var f = new chrome.cast.Error(chrome.cast.K.TIMEOUT);
          c && (f.description = c);
          d(f);
        }
      }
    }.bind(this);
    this.pa = setTimeout(d, 0 < this.Fb ? this.Fb : l.A.od);
  }
};
l.sa = function() {
  this.U = {};
};
b = l.sa.prototype;
b.add = function(a, c) {
  var d = this.U[a];
  if (d) {
    return -1 == d.indexOf(c) && d.push(c), !1;
  }
  this.U[a] = [c];
  return !0;
};
b.remove = function(a, c) {
  var d = this.U[a];
  if (!d) {
    return !1;
  }
  var e = d.indexOf(c);
  if (-1 == e) {
    return !1;
  }
  if (1 == d.length) {
    return delete this.U[a], !0;
  }
  d.splice(e, 1);
  return !1;
};
b.Vc = function(a) {
  if (!(a in this.U)) {
    return !1;
  }
  delete this.U[a];
  return !0;
};
b.Ag = function(a) {
  var c = !1;
  Object.keys(this.U).forEach(function(d) {
    0 == d.indexOf(a) && (delete this.U[d], c = !0);
  }, this);
  return c;
};
b.get = function(a) {
  return this.U[a] || [];
};
b.contains = function(a, c) {
  return -1 != this.get(a).indexOf(c);
};
l.H = function() {
  this.ea = {};
  this.Ha = {};
};
b = l.H.prototype;
b.Eg = function(a, c) {
  var d = this.ea[a];
  return d ? (d.status = c, d.media.forEach(function(a) {
    delete this.Ha[this.hb(a)];
  }, this), delete this.ea[a], !0) : !1;
};
b.Bg = function(a) {
  delete this.Ha[this.hb(a)];
  var c = this.ea[a.sessionId];
  c && (a = c.media.indexOf(a), -1 != a && c.media.splice(a, 1));
};
b.lf = function(a) {
  if (a.sessionId == chrome.cast.j.Lb) {
    return a;
  }
  var c = this.ea[a.sessionId];
  if (c) {
    return c.statusText = a.statusText, c.namespaces = a.namespaces || [], c.receiver.volume = a.receiver.volume, c;
  }
  var c = new chrome.cast.j(a.sessionId, a.appId, a.displayName, a.appImages, a.receiver), d;
  for (d in a) {
    "media" == d ? c.media = a.media.map(function(a) {
      a = this.zc(a);
      a.pb = !1;
      a.Ca = !0;
      return a;
    }.bind(this)) : a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return this.ea[a.sessionId] = c;
};
b.zc = function(a) {
  var c = this.hb(a), d = this.Ha[c];
  d || (d = new chrome.cast.media.f(a.sessionId, a.mediaSessionId), this.Ha[c] = d, (c = this.ea[a.sessionId]) && c.media.push(d));
  l.H.Wg(d, a);
  return d;
};
b.hb = function(a) {
  return a.sessionId + "#" + a.mediaSessionId;
};
l.H.Wg = function(a, c) {
  a.currentItemId = null;
  a.loadingItemId = null;
  a.preloadedItemId = null;
  for (var d in c) {
    "items" != d && c.hasOwnProperty(d) && ("volume" == d ? (a.volume.level = c.volume.level, a.volume.muted = c.volume.muted) : a[d] = c[d]);
  }
  "currentTime" in c && (a.ob = g.now());
  l.H.Cf(a.playerState, a.loadingItemId) ? (a.currentItemId = null, a.loadingItemId = null, a.preloadedItemId = null, a.items = null) : l.H.Vg(a, c);
};
l.H.Cf = function(a, c) {
  return a == chrome.cast.media.ha.IDLE && null == c;
};
l.H.cf = function(a) {
  var c = {};
  if (a) {
    for (var d = 0;d < a.length;d++) {
      c[a[d].itemId] = d;
    }
  }
  return c;
};
l.H.Vg = function(a, c) {
  if (c.hasOwnProperty("items") && c.items) {
    for (var d = [], e = l.H.cf(a.items), f = c.items, h = 0;h < f.length;h++) {
      var k = f[h];
      if (!k.media) {
        var m = k.itemId, n = a.items ? a.items[e[m]] : null;
        n && n.media ? k.media = n.media : m == a.currentItemId && a.media && (k.media = a.media);
      }
      d.push(l.H.nf(k));
    }
    a.items = d;
  }
};
l.H.nf = function(a) {
  var c = new chrome.cast.media.dc(a.media), d;
  for (d in a) {
    a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return c;
};
chrome.cast.N = function(a) {
  this.Wf = 1E3 * Math.floor(1E5 * Math.random());
  this.Ia = a;
  this.ca = {};
  this.va = !1;
  this.ba = this.B = this.ab = null;
  this.wa = new l.sa;
  this.Ga = new l.sa;
  this.oa = new l.sa;
  this.Ja = [];
  this.Ka = new l.H(this.oj);
  this.Ec = !1;
};
b = chrome.cast.N.prototype;
b.init = function() {
  this.Ia.Ig(this.kg.bind(this));
};
b.Af = function() {
  return "a" + this.Wf++;
};
b.Tf = function(a) {
  var c = a.seqNum;
  if (!c) {
    return !1;
  }
  var d = this.ca[c];
  if (d) {
    var e = a.message;
    a.type == l.m.ERROR ? d.fd()(a.message) : d.gd()(e);
    delete this.ca[c];
  }
  return !!d;
};
b.Uf = function(a) {
  switch(a.type) {
    case l.m.Xb:
    ;
    case l.m.mc:
      a.message = this.mf(a.message);
      break;
    case l.m.ua:
      a = a.message, a.type == l.o.Ra && a.status && (a.status = a.status.map(this.kf.bind(this)));
  }
};
b.mf = function(a) {
  return this.Ka.lf(a);
};
b.kg = function(a) {
  this.Uf(a);
  if (!this.Tf(a)) {
    switch(a.type) {
      case l.m.Sb:
        this.Xf(a);
        break;
      case l.m.ne:
        this.fg(a);
        break;
      case l.m.me:
        this.eg(a);
        break;
      case l.m.Fd:
        this.Ec = !0;
        break;
      case l.m.Xb:
        this.dg(a);
        break;
      case l.m.mc:
        this.hg(a);
        break;
      case l.m.xd:
        this.Zf(a);
        break;
      case l.m.oe:
        this.gg(a);
        break;
      case l.m.Ib:
        this.ag(a.message);
        break;
      case l.m.ua:
        this.cg(a);
        break;
      case l.m.sd:
        this.Yf(a);
    }
  }
};
b.Yf = function(a) {
  var c = a.message;
  this.B && this.B.customDialLaunchCallback && this.B.customDialLaunchCallback(c).then(g.bind(function(c) {
    this.Ia.Ab(new l.F(l.m.Kb, c, a.seqNum));
  }, this), g.bind(function() {
    this.Ia.Ab(new l.F(l.m.Kb, null, a.seqNum));
  }, this));
};
b.cg = function(a) {
  switch(a.message.type) {
    case l.o.Ra:
      this.bg(a.message);
  }
};
b.bg = function(a) {
  a.status.forEach(this.sc.bind(this));
};
b.dg = function(a) {
  this.B && this.B.sessionListener(a.message);
};
b.hg = function(a) {
  (a = a.message) && this.oa.get(a.sessionId).forEach(function(a) {
    a(!0);
  });
};
b.Zf = function(a) {
  this.Wc(a.message, chrome.cast.ja.DISCONNECTED);
};
b.gg = function(a) {
  this.Wc(a.message, chrome.cast.ja.STOPPED);
};
b.Wc = function(a, c) {
  var d = c != chrome.cast.ja.STOPPED;
  this.Ka.Eg(a, c) && (this.wa.Ag(a + "#"), this.Ga.Vc(a), this.oa.get(a).forEach(function(a) {
    a(d);
  }), this.oa.Vc(a));
};
b.ag = function(a) {
  this.xf(a.sessionId, a.namespaceName).forEach(function(c) {
    c(a.namespaceName, a.message);
  });
};
b.fg = function(a) {
  if (this.B) {
    var c = a.message;
    a.receiverList ? this.B.receiverListener.apply(null, [c, a.receiverList]) : this.B.receiverListener(c);
  }
};
b.eg = function(a) {
  this.Ja.forEach(function(c) {
    c(a.message.receiver, a.message.receiverAction);
  }, this);
};
b.Xf = function(a) {
  (a = a.message) ? (this.ab = a, this.ba && this.ba.fd()(a)) : (this.va = !0, this.Yc(), this.ba && this.ba.gd()(void 0));
};
b.Bb = function(a, c, d) {
  this.O(d) && (a = a || [], l.u.ff(a) ? this.M(new l.F(l.m.ye, a), new l.A(c, d)) : d && d(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)));
};
b.fa = function(a, c, d, e) {
  this.O(e) && (l.u.hf(c) ? (c.sessionId = a, this.M(new l.F(l.m.ua, c, null, null, chrome.cast.timeout.fa), new l.A(d, e, chrome.cast.timeout.fa))) : e && e(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)));
};
b.la = function(a, c, d) {
  this.O(d) && this.M(new l.F(l.m.Nd, a, null, null, chrome.cast.timeout.la), new l.A(c, d, chrome.cast.timeout.la));
};
b.Xc = function(a, c, d, e) {
  this.O(d) && this.M(new l.F(l.m.ua, a, null, null, e), new l.A(c, d, e));
};
b.Z = function(a) {
  this.O(g.Sc) && this.M(new l.F(l.m.Pd, a));
};
b.$c = function(a, c, d, e, f) {
  null != a && (c.mediaSessionId = a.mediaSessionId, c.sessionId = a.sessionId);
  c.requestId = null;
  this.Xc(c, function(a) {
    d && a.status && 1 == a.status.length ? d(a.status[0]) : e && e(new chrome.cast.Error(chrome.cast.K.SESSION_ERROR));
  }, e, f);
};
b.Zc = function(a, c, d) {
  this.$c(null, a, function(a) {
    a.Ca = !0;
    a.pb = !0;
    c && c(a);
  }.bind(this), d, chrome.cast.media.timeout.load);
};
b.w = function(a, c, d, e, f) {
  this.$c(a, c, function(a) {
    this.sc(a);
    d && d();
  }.bind(this), e, f);
};
b.Hg = function(a, c, d) {
  this.O(d) && (l.u.ef(a) ? this.M(new l.F(l.m.Ib, a, null, null, chrome.cast.timeout.zb), new l.A(c, d, chrome.cast.timeout.zb)) : d && d(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)));
};
b.Yc = function() {
  this.B && this.va && this.M(new l.F(l.m.pd, new l.md(this.B)));
};
b.M = function(a, c) {
  var d = this.Af();
  a.seqNum = d;
  if (this.ca[d] && !this.ca[d].Mf()) {
    throw "Try to send a request with the existing seqNum: " + a.seqNum;
  }
  c && (this.ca[d] = c, c.bd(function() {
    delete this.ca[d];
  }.bind(this)));
  this.Ia.Ab(a);
};
b.nb = function(a, c) {
  this.O(c) && this.M(new l.F(l.m.ie, void 0), new l.A(a, c));
};
b.lb = function(a, c, d) {
  l.u.df(a) ? this.ab ? d && d(this.ab) : this.B ? c && c() : (this.B = a, this.va ? (this.Yc(), c && c()) : (this.ba = new l.A(c, d, 6E3), this.ba.bd())) : d && d(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER));
};
b.da = function(a, c, d, e) {
  this.O(c) && (d && !l.u.vc(d) ? c && c(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)) : (!d && this.B && (d = this.B.sessionRequest), this.M(new l.F(l.m.pe, d, null, null, d.requestSessionTimeout, e), new l.A(a, c, 0))));
};
b.xb = function(a) {
  this.O(g.Sc) && a && this.M(new l.F(l.m.qe, a));
};
chrome.cast.N.kd = new chrome.cast.Error(chrome.cast.K.API_NOT_INITIALIZED);
chrome.cast.N.Dd = new chrome.cast.Error(chrome.cast.K.EXTENSION_MISSING);
b = chrome.cast.N.prototype;
b.O = function(a) {
  return this.va ? this.Ec ? (a && a(chrome.cast.N.Dd), !1) : !0 : (a && a(chrome.cast.N.kd), !1);
};
b.gb = function(a, c) {
  return a + "#" + c;
};
b.Ue = function(a, c, d) {
  this.wa.add(this.gb(a, c), d);
};
b.zg = function(a, c, d) {
  this.wa.remove(this.gb(a, c), d);
};
b.xf = function(a, c) {
  return this.wa.get(this.gb(a, c));
};
b.Ya = function(a, c) {
  this.Ga.add(a, c);
};
b.ub = function(a, c) {
  this.Ga.remove(a, c);
};
b.Ve = function(a, c) {
  -1 == a.qa.indexOf(c) && a.qa.push(c);
};
b.Cg = function(a, c) {
  var d = a.qa.indexOf(c);
  -1 != d && a.qa.splice(d, 1);
};
chrome.cast.N.Jf = function(a) {
  return a.playerState != chrome.cast.media.ha.IDLE || null != a.loadingItemId;
};
b = chrome.cast.N.prototype;
b.sc = function(a) {
  if (a.Ca) {
    var c = chrome.cast.N.Jf(a);
    a.qa.forEach(function(a) {
      a(c);
    });
    c || this.Ka.Bg(a);
  } else {
    a.Ca = !0, a.pb || this.Ga.get(a.sessionId).forEach(function(c) {
      c(a);
    });
  }
};
b.kf = function(a) {
  return this.Ka.zc(a);
};
b.Xe = function(a, c) {
  this.oa.add(a, c);
};
b.Fg = function(a, c) {
  this.oa.remove(a, c);
};
b.Za = function(a) {
  this.Ja.push(a);
};
b.vb = function(a) {
  a = this.Ja.indexOf(a);
  0 <= a && this.Ja.splice(a, 1);
};
b.Cb = function(a, c, d) {
  this.O(d) && this.M(new l.F(l.m.ze, a), new l.A(c, d));
};
chrome.cast.isAvailable = !1;
g.c("chrome.cast.isAvailable", chrome.cast.isAvailable);
chrome.cast.i = null;
chrome.cast.nb = function(a, c) {
  chrome.cast.i.nb(a, c);
};
g.c("chrome.cast.isTabBroadcast", chrome.cast.nb);
chrome.cast.lb = function(a, c, d) {
  chrome.cast.i.lb(a, c, d);
};
g.c("chrome.cast.initialize", chrome.cast.lb);
chrome.cast.da = function(a, c, d, e) {
  chrome.cast.i.da(a, c, d, e);
};
g.c("chrome.cast.requestSession", chrome.cast.da);
chrome.cast.xb = function(a) {
  chrome.cast.i.xb(a);
};
g.c("chrome.cast.requestSessionById", chrome.cast.xb);
chrome.cast.Za = function(a) {
  chrome.cast.i.Za(a);
};
g.c("chrome.cast.addReceiverActionListener", chrome.cast.Za);
chrome.cast.vb = function(a) {
  chrome.cast.i.vb(a);
};
g.c("chrome.cast.removeReceiverActionListener", chrome.cast.vb);
chrome.cast.Z = function(a) {
  chrome.cast.i.Z(a);
};
g.c("chrome.cast.logMessage", chrome.cast.Z);
chrome.cast.Bb = function(a, c, d) {
  chrome.cast.i.Bb(a, c, d);
};
g.c("chrome.cast.setCustomReceivers", chrome.cast.Bb);
chrome.cast.Cb = function(a, c, d) {
  chrome.cast.i.Cb(a, c, d);
};
g.c("chrome.cast.setReceiverDisplayStatus", chrome.cast.Cb);
chrome.cast.unescape = function(a) {
  return g.a.Gb(a);
};
g.c("chrome.cast.unescape", chrome.cast.unescape);
chrome.cast.j.prototype.Kg = function(a, c, d) {
  a = new l.kc(new chrome.cast.Volume(a, null), this.receiver.volume);
  chrome.cast.i.fa(this.sessionId, a, c, d);
};
g.g(chrome.cast.j.prototype, "setReceiverVolumeLevel", chrome.cast.j.prototype.Kg);
chrome.cast.j.prototype.Jg = function(a, c, d) {
  a = new l.kc(new chrome.cast.Volume(null, a), this.receiver.volume);
  chrome.cast.i.fa(this.sessionId, a, c, d);
};
g.g(chrome.cast.j.prototype, "setReceiverMuted", chrome.cast.j.prototype.Jg);
chrome.cast.j.prototype.leave = function(a, c) {
  chrome.cast.i.la(this.sessionId, a, c);
};
g.g(chrome.cast.j.prototype, "leave", chrome.cast.j.prototype.leave);
chrome.cast.j.prototype.stop = function(a, c) {
  chrome.cast.i.Xc(new l.Fe(this.sessionId), a, c, chrome.cast.timeout.cd);
};
g.g(chrome.cast.j.prototype, "stop", chrome.cast.j.prototype.stop);
chrome.cast.j.prototype.sendMessage = function(a, c, d, e) {
  chrome.cast.i.Hg(new l.nd(this.sessionId, a, c), d, e);
};
g.g(chrome.cast.j.prototype, "sendMessage", chrome.cast.j.prototype.sendMessage);
chrome.cast.j.prototype.$a = function(a) {
  chrome.cast.i.Xe(this.sessionId, a);
};
g.g(chrome.cast.j.prototype, "addUpdateListener", chrome.cast.j.prototype.$a);
chrome.cast.j.prototype.wb = function(a) {
  chrome.cast.i.Fg(this.sessionId, a);
};
g.g(chrome.cast.j.prototype, "removeUpdateListener", chrome.cast.j.prototype.wb);
chrome.cast.j.prototype.We = function(a, c) {
  chrome.cast.i.Ue(this.sessionId, a, c);
};
g.g(chrome.cast.j.prototype, "addMessageListener", chrome.cast.j.prototype.We);
chrome.cast.j.prototype.Dg = function(a, c) {
  chrome.cast.i.zg(this.sessionId, a, c);
};
g.g(chrome.cast.j.prototype, "removeMessageListener", chrome.cast.j.prototype.Dg);
chrome.cast.j.prototype.Ya = function(a) {
  chrome.cast.i.Ya(this.sessionId, a);
};
g.g(chrome.cast.j.prototype, "addMediaListener", chrome.cast.j.prototype.Ya);
chrome.cast.j.prototype.ub = function(a) {
  chrome.cast.i.ub(this.sessionId, a);
};
g.g(chrome.cast.j.prototype, "removeMediaListener", chrome.cast.j.prototype.ub);
chrome.cast.j.prototype.Of = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.i.Zc(a, c, d);
};
g.g(chrome.cast.j.prototype, "loadMedia", chrome.cast.j.prototype.Of);
chrome.cast.media.f.prototype.Ba = function(a, c, d) {
  a || (a = new chrome.cast.media.Rb);
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.Ba);
};
g.g(chrome.cast.media.f.prototype, "getStatus", chrome.cast.media.f.prototype.Ba);
chrome.cast.media.f.prototype.play = function(a, c, d) {
  a || (a = new chrome.cast.media.bc);
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.play);
};
g.g(chrome.cast.media.f.prototype, "play", chrome.cast.media.f.prototype.play);
chrome.cast.media.f.prototype.pause = function(a, c, d) {
  a || (a = new chrome.cast.media.ac);
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.pause);
};
g.g(chrome.cast.media.f.prototype, "pause", chrome.cast.media.f.prototype.pause);
chrome.cast.media.f.prototype.seek = function(a, c, d) {
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.seek);
};
g.g(chrome.cast.media.f.prototype, "seek", chrome.cast.media.f.prototype.seek);
chrome.cast.media.f.prototype.stop = function(a, c, d) {
  a || (a = new chrome.cast.media.lc);
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.stop);
};
g.g(chrome.cast.media.f.prototype, "stop", chrome.cast.media.f.prototype.stop);
chrome.cast.media.f.prototype.La = function(a, c, d) {
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.La);
};
g.g(chrome.cast.media.f.prototype, "setVolume", chrome.cast.media.f.prototype.La);
chrome.cast.media.f.prototype.ya = function(a, c, d) {
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.ya);
};
g.g(chrome.cast.media.f.prototype, "editTracksInfo", chrome.cast.media.f.prototype.ya);
chrome.cast.j.prototype.qg = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.i.Zc(a, c, d);
};
g.g(chrome.cast.j.prototype, "queueLoad", chrome.cast.j.prototype.qg);
chrome.cast.media.f.prototype.ng = function(a, c, d) {
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queueInsertItems", chrome.cast.media.f.prototype.ng);
chrome.cast.media.f.prototype.lg = function(a, c, d) {
  chrome.cast.i.w(this, new chrome.cast.media.Ua([a]), c, d, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queueAppendItem", chrome.cast.media.f.prototype.lg);
chrome.cast.media.f.prototype.mg = function(a, c, d) {
  var e = new chrome.cast.media.Ua([a.item]);
  e.currentItemIndex = 0;
  e.insertBefore = a.insertBefore;
  e.currentTime = a.currentTime;
  e.customData = a.customData;
  chrome.cast.i.w(this, e, c, d, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queueInsertAndPlayItem", chrome.cast.media.f.prototype.mg);
chrome.cast.media.f.prototype.yg = function(a, c, d) {
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queueUpdateItems", chrome.cast.media.f.prototype.yg);
chrome.cast.media.f.prototype.tg = function(a, c) {
  var d = new chrome.cast.media.ia;
  d.jump = -1;
  chrome.cast.i.w(this, d, a, c, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queuePrev", chrome.cast.media.f.prototype.tg);
chrome.cast.media.f.prototype.sg = function(a, c) {
  var d = new chrome.cast.media.ia;
  d.jump = 1;
  chrome.cast.i.w(this, d, a, c, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queueNext", chrome.cast.media.f.prototype.sg);
chrome.cast.media.f.prototype.og = function(a, c, d) {
  if (0 > this.Aa(a)) {
    chrome.cast.Z("itemId not found in the queue.");
  } else {
    var e = new chrome.cast.media.ia;
    e.currentItemId = a;
    chrome.cast.i.w(this, e, c, d, chrome.cast.media.timeout.D);
  }
};
g.g(chrome.cast.media.f.prototype, "queueJumpToItem", chrome.cast.media.f.prototype.og);
chrome.cast.media.f.prototype.pg = function(a, c, d, e) {
  if (0 > this.Aa(a)) {
    chrome.cast.Z("itemId not found in the queue.");
  } else {
    var f = new chrome.cast.media.ia;
    f.currentItemId = a;
    f.currentTime = c;
    chrome.cast.i.w(this, f, d, e, chrome.cast.media.timeout.D);
  }
};
g.g(chrome.cast.media.f.prototype, "queueJumpToItemWithCurrentTime", chrome.cast.media.f.prototype.pg);
chrome.cast.media.f.prototype.xg = function(a, c, d) {
  var e = new chrome.cast.media.gc;
  e.repeatMode = a;
  chrome.cast.i.w(this, e, c, d, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queueSetRepeatMode", chrome.cast.media.f.prototype.xg);
chrome.cast.media.f.prototype.vg = function(a, c, d) {
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queueRemoveItems", chrome.cast.media.f.prototype.vg);
chrome.cast.media.f.prototype.ug = function(a, c, d) {
  0 > this.Aa(a) ? chrome.cast.Z("itemId not found in the queue.") : chrome.cast.i.w(this, new chrome.cast.media.ec([a]), c, d, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queueRemoveItem", chrome.cast.media.f.prototype.ug);
chrome.cast.media.f.prototype.wg = function(a, c, d) {
  chrome.cast.i.w(this, a, c, d, chrome.cast.media.timeout.D);
};
g.g(chrome.cast.media.f.prototype, "queueReorderItems", chrome.cast.media.f.prototype.wg);
chrome.cast.media.f.prototype.rg = function(a, c, d, e) {
  var f = this.Aa(a);
  if (0 > f) {
    chrome.cast.Z("itemId not found in the queue.");
  } else {
    if (0 > c) {
      e && e(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER));
    } else {
      if (f == c) {
        d && d();
      } else {
        var h = null;
        c = c > f ? c + 1 : c;
        c < this.items.length && (h = this.items[c]);
        a = new chrome.cast.media.fc([a]);
        a.insertBefore = h ? h.itemId : null;
        chrome.cast.i.w(this, a, d, e, chrome.cast.media.timeout.D);
      }
    }
  }
};
g.g(chrome.cast.media.f.prototype, "queueMoveItemToNewIndex", chrome.cast.media.f.prototype.rg);
chrome.cast.media.f.prototype.Og = function(a) {
  return -1 < this.supportedMediaCommands.indexOf(a);
};
g.g(chrome.cast.media.f.prototype, "supportsCommand", chrome.cast.media.f.prototype.Og);
chrome.cast.media.f.prototype.yf = function() {
  if (this.playerState == chrome.cast.media.ha.PLAYING && 0 <= this.ob) {
    var a = (g.now() - this.ob) / 1E3, a = this.currentTime + this.playbackRate * a;
    this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
    0 > a && (a = 0);
    return a;
  }
  return this.currentTime;
};
g.g(chrome.cast.media.f.prototype, "getEstimatedTime", chrome.cast.media.f.prototype.yf);
chrome.cast.media.f.prototype.$a = function(a) {
  chrome.cast.i.Ve(this, a);
};
g.g(chrome.cast.media.f.prototype, "addUpdateListener", chrome.cast.media.f.prototype.$a);
chrome.cast.media.f.prototype.wb = function(a) {
  chrome.cast.i.Cg(this, a);
};
g.g(chrome.cast.media.f.prototype, "removeUpdateListener", chrome.cast.media.f.prototype.wb);
chrome.cast.media.f.prototype.Aa = function(a) {
  for (var c = 0;c < this.items.length;c++) {
    if (this.items[c].itemId == a) {
      return c;
    }
  }
  return -1;
};
chrome.cast.Db = function() {
  if (!chrome.cast.ad && (chrome.cast.ad = !0, chrome.cast.extensionId)) {
    var a = "chrome-extension://" + chrome.cast.extensionId, c = document.createElement("iframe");
    c.src = a + "/api_iframe.html?appOrigin=" + window.location.origin;
    c.setAttribute("style", "display:none");
    document.body.appendChild(c);
    a = new chrome.cast.ga(c, a);
    a.init();
    chrome.cast.i = new chrome.cast.N(a);
    chrome.cast.i.init();
    chrome.cast.isAvailable = !0;
    (a = window.__onGCastApiAvailable) && "function" == typeof a && a(!0);
  }
};
chrome.cast.ad = !1;
"complete" == document.readyState ? chrome.cast.Db() : (window.addEventListener("load", chrome.cast.Db, !1), window.addEventListener("DOMContentLoaded", chrome.cast.Db, !1));
})();
(function() {var b, l = l || {};
l.global = this;
l.ha = function(a) {
  return void 0 !== a;
};
l.de = function(a, c, d) {
  a = a.split(".");
  d = d || l.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && l.ha(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
l.Et = function(a, c) {
  l.de(a, c);
};
l.na = !0;
l.da = "en";
l.Ud = !0;
l.Sd = !1;
l.ki = !l.na;
l.rf = !1;
l.zv = function(a) {
  l.fg(a);
};
l.fg = function(a, c) {
  l.de(a, c);
};
l.yj = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
l.fd = function(a) {
  if (!l.G(a) || !a || -1 == a.search(l.yj)) {
    throw Error("Invalid module identifier");
  }
  if (!l.pl()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (l.sa.Le) {
    throw Error("goog.module may only be called once per module.");
  }
  l.sa.Le = a;
};
l.fd.get = function(a) {
  return l.fd.Ik(a);
};
l.fd.Ik = function() {
};
l.sa = null;
l.pl = function() {
  return null != l.sa;
};
l.fd.mg = function() {
  l.sa.mg = !0;
};
l.Vv = function(a) {
  if (l.ki) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
l.Tt = function() {
};
l.Ig = function(a, c) {
  for (var d = a.split("."), e = c || l.global, f;f = d.shift();) {
    if (l.cd(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
l.ku = function(a, c) {
  var d = c || l.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
l.Ds = function(a, c, d, e) {
  if (l.pf) {
    var f;
    a = a.replace(/\\/g, "/");
    for (var g = l.la, h = 0;f = c[h];h++) {
      g.zc[f] = a, g.Pe[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in g.Cb || (g.Cb[a] = {}), g.Cb[a][c] = !0;
    }
  }
};
l.ww = !1;
l.Zo = !0;
l.dv = function(a) {
  l.global.console && l.global.console.error(a);
};
l.Ev = function() {
};
l.rb = "";
l.Ac = function() {
};
l.Bs = function() {
  throw Error("unimplemented abstract method");
};
l.Ej = function(a) {
  a.oe = function() {
    if (a.wc) {
      return a.wc;
    }
    l.na && (l.Tg[l.Tg.length] = a);
    return a.wc = new a;
  };
};
l.Tg = [];
l.Hi = !0;
l.jj = l.na;
l.Kl = {};
l.pf = !1;
l.pf && (l.la = {Pe:{}, zc:{}, Cb:{}, $h:{}, ud:{}, Sc:{}}, l.Pg = function() {
  var a = l.global.document;
  return "undefined" != typeof a && "write" in a;
}, l.tk = function() {
  if (l.ha(l.global.gi)) {
    l.rb = l.global.gi;
  } else {
    if (l.Pg()) {
      for (var a = l.global.document.getElementsByTagName("SCRIPT"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          l.rb = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, l.we = function(a, c) {
  (l.global.Zn || l.nn)(a, c) && (l.la.ud[a] = !0);
}, l.Fi = !(l.global.atob || !l.global.document || !l.global.document.all), l.il = function(a) {
  l.we("", 'goog.retrieveAndExecModule_("' + a + '");') && (l.la.ud[a] = !0);
}, l.Re = [], l.yw = function(a, c) {
  return l.Hi && l.ha(l.global.JSON) ? "goog.loadModule(" + l.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, l.Jl = function() {
  var a = l.Re.length;
  if (0 < a) {
    var c = l.Re;
    l.Re = [];
    for (var d = 0;d < a;d++) {
      l.uh(c[d]);
    }
  }
}, l.gv = function(a) {
  l.Zg(a) && l.Fj(a) && l.uh(l.rb + l.re(a));
}, l.Zg = function(a) {
  return (a = l.re(a)) && l.la.Pe[a] ? l.rb + a in l.la.Sc : !1;
}, l.Fj = function(a) {
  if ((a = l.re(a)) && a in l.la.Cb) {
    for (var c in l.la.Cb[a]) {
      if (!l.zl(c) && !l.Zg(c)) {
        return !1;
      }
    }
  }
  return !0;
}, l.uh = function(a) {
  if (a in l.la.Sc) {
    var c = l.la.Sc[a];
    delete l.la.Sc[a];
    l.Vk(c);
  }
}, l.av = function(a) {
  var c = l.sa;
  try {
    l.sa = {Le:void 0};
    var d;
    if (l.Ma(a)) {
      d = a.call(l.global, {});
    } else {
      if (l.G(a)) {
        d = l.Il.call(l.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = l.sa.Le;
    if (!l.G(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    l.sa.mg ? l.fg(e, d) : l.jj && Object.seal && Object.seal(d);
    l.Kl[e] = d;
  } finally {
    l.sa = c;
  }
}, l.Il = function(a) {
  eval(a);
  return {};
}, l.mn = function(a) {
  l.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
}, l.Gj = function(a) {
  var c = l.global.document, d = c.createElement("script");
  d.type = "text/javascript";
  d.src = a;
  d.defer = !1;
  d.async = !1;
  c.head.appendChild(d);
}, l.nn = function(a, c) {
  if (l.Pg()) {
    var d = l.global.document;
    if (!l.rf && "complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = l.Fi;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++l.oh + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : l.rf ? l.Gj(a) : l.mn(a) : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return !0;
  }
  return !1;
}, l.oh = 0, l.sv = function(a, c) {
  "complete" == a.readyState && l.oh == c && l.Jl();
  return !0;
}, l.zw = function(a) {
  function c(a) {
    if (!(a in f.ud || a in f.$h)) {
      f.$h[a] = !0;
      if (a in f.Cb) {
        for (var g in f.Cb[a]) {
          if (!l.zl(g)) {
            if (g in f.zc) {
              c(f.zc[g]);
            } else {
              throw Error("Undefined nameToPath for " + g);
            }
          }
        }
      }
      a in e || (e[a] = !0, d.push(a));
    }
  }
  var d = [], e = {}, f = l.la;
  c(a);
  for (a = 0;a < d.length;a++) {
    var g = d[a];
    l.la.ud[g] = !0;
  }
  var h = l.sa;
  l.sa = null;
  for (a = 0;a < d.length;a++) {
    if (g = d[a]) {
      f.Pe[g] ? l.il(l.rb + g) : l.we(l.rb + g);
    } else {
      throw l.sa = h, Error("Undefined script input");
    }
  }
  l.sa = h;
}, l.re = function(a) {
  return a in l.la.zc ? l.la.zc[a] : null;
}, l.tk(), l.global.$n || l.we(l.rb + "deps.js"));
l.nv = function(a) {
  a = a.split("/");
  for (var c = 0;c < a.length;) {
    "." == a[c] ? a.splice(c, 1) : c && ".." == a[c] && a[c - 1] && ".." != a[c - 1] ? a.splice(--c, 2) : c++;
  }
  return a.join("/");
};
l.$u = function(a) {
  if (l.global.hi) {
    return l.global.hi(a);
  }
  var c = new l.global.XMLHttpRequest;
  c.open("get", a, !1);
  c.send();
  return c.responseText;
};
l.Fv = function() {
};
l.xa = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
l.gh = function(a) {
  return null === a;
};
l.cd = function(a) {
  return null != a;
};
l.isArray = function(a) {
  return "array" == l.xa(a);
};
l.W = function(a) {
  var c = l.xa(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
l.zu = function(a) {
  return l.Rb(a) && "function" == typeof a.getFullYear;
};
l.G = function(a) {
  return "string" == typeof a;
};
l.bd = function(a) {
  return "boolean" == typeof a;
};
l.yc = function(a) {
  return "number" == typeof a;
};
l.Ma = function(a) {
  return "function" == l.xa(a);
};
l.Rb = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
l.tc = function(a) {
  return a[l.qb] || (a[l.qb] = ++l.dn);
};
l.pu = function(a) {
  return !!a[l.qb];
};
l.mm = function(a) {
  "removeAttribute" in a && a.removeAttribute(l.qb);
  try {
    delete a[l.qb];
  } catch (c) {
  }
};
l.qb = "closure_uid_" + (1E9 * Math.random() >>> 0);
l.dn = 0;
l.Zt = l.tc;
l.Cv = l.mm;
l.Vj = function(a) {
  var c = l.xa(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.Vj(a[d]);
    }
    return c;
  }
  return a;
};
l.Lj = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
l.Kj = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
l.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? l.bind = l.Lj : l.bind = l.Kj;
  return l.bind.apply(null, arguments);
};
l.Fh = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
l.iv = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
l.now = l.Ud && Date.now || function() {
  return +new Date;
};
l.Vk = function(a) {
  if (l.global.execScript) {
    l.global.execScript(a, "JavaScript");
  } else {
    if (l.global.eval) {
      if (null == l.Uc) {
        if (l.global.eval("var _evalTest_ = 1;"), "undefined" != typeof l.global._evalTest_) {
          try {
            delete l.global._evalTest_;
          } catch (c) {
          }
          l.Uc = !0;
        } else {
          l.Uc = !1;
        }
      }
      if (l.Uc) {
        l.global.eval(a);
      } else {
        var d = l.global.document, e = d.createElement("SCRIPT");
        e.type = "text/javascript";
        e.defer = !1;
        e.appendChild(d.createTextNode(a));
        d.body.appendChild(e);
        d.body.removeChild(e);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
l.Uc = null;
l.Yt = function(a, c) {
  var d = function(a) {
    return l.kg[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = l.kg ? "BY_WHOLE" == l.bk ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
l.Pv = function(a, c) {
  l.kg = a;
  l.bk = c;
};
l.au = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
l.bu = function(a) {
  return a;
};
l.F = function(a, c, d) {
  l.de(a, c, d);
};
l.w = function(a, c, d) {
  a[c] = d;
};
l.wb = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Db = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.Jj = function(a, d, g) {
    for (var h = Array(arguments.length - 2), k = 2;k < arguments.length;k++) {
      h[k - 2] = arguments[k];
    }
    return c.prototype[d].apply(a, h);
  };
};
l.Jj = function(a, c, d) {
  var e = arguments.callee.caller;
  if (l.Sd || l.na && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Db) {
    for (var f = Array(arguments.length - 1), g = 1;g < arguments.length;g++) {
      f[g - 1] = arguments[g];
    }
    return e.Db.constructor.apply(a, f);
  }
  f = Array(arguments.length - 2);
  for (g = 2;g < arguments.length;g++) {
    f[g - 2] = arguments[g];
  }
  for (var g = !1, h = a.constructor;h;h = h.Db && h.Db.constructor) {
    if (h.prototype[c] === e) {
      g = !0;
    } else {
      if (g) {
        return h.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
l.scope = function(a) {
  a.call(l.global);
};
l.tq = !1;
l.Ia = function(a, c) {
  var d = c.constructor, e = c.Vm;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = l.Ia.Zj(d, a);
  a && l.wb(d, a);
  delete c.constructor;
  delete c.Vm;
  l.Ia.Yf(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : l.Ia.Yf(d, e));
  return d;
};
l.Ia.ij = l.na;
l.Ia.Zj = function(a, c) {
  if (l.Ia.ij && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[l.qj]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[l.qb] = c[l.qb];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
l.Ia.Jf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
l.Ia.Yf = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < l.Ia.Jf.length;e++) {
    d = l.Ia.Jf[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
l.gw = function() {
};
l.qj = "goog_defineClass_legacy_unsealable";
var chrome = chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.a = {};
l.F("chrome.cast.games", chrome.cast.a);
chrome.cast.a.Ld = "urn:x-cast:com.google.cast.games";
l.w(chrome.cast.a, "NAMESPACE", chrome.cast.a.Ld);
chrome.cast.a.Rd = "1.0.0";
l.w(chrome.cast.a, "SDK_VERSION_NUMBER", chrome.cast.a.Rd);
chrome.cast.a.Bf = {UNKNOWN:0, LOADING:1, RUNNING:2, PAUSED:3, SHOWING_INFO_SCREEN:4};
l.w(chrome.cast.a, "GameplayState", chrome.cast.a.Bf);
chrome.cast.a.Gf = {UNKNOWN:0, OPEN:1, CLOSED:2};
l.w(chrome.cast.a, "LobbyState", chrome.cast.a.Gf);
chrome.cast.a.$a = {INVALID_REQUEST:"invalid_request", NOT_ALLOWED:"not_allowed", INCORRECT_VERSION:"incorrect_version", TOO_MANY_PLAYERS:"too_many_players", xd:"cast_error"};
l.w(chrome.cast.a, "GameManagerErrorCode", chrome.cast.a.$a);
chrome.cast.a.D = {};
chrome.cast.a.D.Ha = {Td:0, INVALID_REQUEST:1, NOT_ALLOWED:2, INCORRECT_VERSION:3, TOO_MANY_PLAYERS:4};
chrome.cast.a.D.Ha.Ek = function(a) {
  switch(a) {
    case chrome.cast.a.D.Ha.INVALID_REQUEST:
      return chrome.cast.a.$a.INVALID_REQUEST;
    case chrome.cast.a.D.Ha.NOT_ALLOWED:
      return chrome.cast.a.$a.NOT_ALLOWED;
    case chrome.cast.a.D.Ha.INCORRECT_VERSION:
      return chrome.cast.a.$a.INCORRECT_VERSION;
    case chrome.cast.a.D.Ha.TOO_MANY_PLAYERS:
      return chrome.cast.a.$a.TOO_MANY_PLAYERS;
    default:
      throw Error("Cannot get error code for status code " + a);;
  }
};
chrome.cast.a.D.zi = function() {
  this.type = chrome.cast.a.D.cc.GAME_MANAGER_PROCESSED_RESULT;
  this.requestId = 0;
  this.playerId = "";
  this.playerToken = null;
  this.statusCode = chrome.cast.a.D.Ha.Td;
  this.errorDescription = "";
  this.gameplayState = chrome.cast.a.Bf.UNKNOWN;
  this.lobbyState = chrome.cast.a.Gf.UNKNOWN;
  this.players = [];
  this.gameData = null;
  this.gameStatusText = "";
  this.extraMessageData = this.gameManagerConfig = null;
};
l.F("chrome.cast.games.internal.GameManagerMessage", chrome.cast.a.D.zi);
chrome.cast.a.D.cc = {UNKNOWN:0, GAME_MANAGER_PROCESSED_RESULT:1, GAME_MESSAGE:2};
l.F("chrome.cast.games.internal.GameManagerMessageType", chrome.cast.a.D.cc);
chrome.cast.a.PlayerState = {UNKNOWN:0, DROPPED:1, QUIT:2, AVAILABLE:3, READY:4, IDLE:5, PLAYING:6};
l.w(chrome.cast.a, "PlayerState", chrome.cast.a.PlayerState);
chrome.cast.a.D.Pd = function() {
  this.yh = 1E3 * Math.floor(1E5 * Math.random());
};
l.Ej(chrome.cast.a.D.Pd);
chrome.cast.a.D.Pd.prototype.Mk = function() {
  var a = this.yh++;
  0 == a && (a = this.yh++);
  return a;
};
chrome.cast.a.D.oa = {UNKNOWN:0, Lf:1, aj:2, Yi:3, Zi:4, $i:5, wi:6, GAME_MESSAGE:7, Cd:1100};
l.F("chrome.cast.games.internal.GameManagerRequestType", chrome.cast.a.D.oa);
chrome.cast.a.D.zf = function() {
  this.type = chrome.cast.a.D.oa.UNKNOWN;
  this.requestId = chrome.cast.a.D.Pd.oe().Mk();
  this.playerId = "";
  this.extraMessageData = this.playerToken = null;
};
chrome.cast.a.D.oa.Fk = function(a) {
  var c = chrome.cast.a.PlayerState, d = chrome.cast.a.D.oa;
  switch(a) {
    case c.QUIT:
      return d.$i;
    case c.AVAILABLE:
      return d.Lf;
    case c.READY:
      return d.aj;
    case c.IDLE:
      return d.Yi;
    case c.PLAYING:
      return d.Zi;
    default:
      throw Error("No mapping to a game manager request type for player state: " + a);;
  }
};
chrome.cast.a.bc = function(a, c, d, e) {
  this.errorCode = a;
  this.errorDescription = c;
  this.result = d;
  this.castError = e;
};
l.w(chrome.cast.a, "GameManagerError", chrome.cast.a.bc);
chrome.cast.a.Ed = function(a, c, d) {
  this.playerId = a;
  this.requestId = c;
  this.extraMessageData = d;
};
l.w(chrome.cast.a, "GameManagerResult", chrome.cast.a.Ed);
l.json = {};
l.json.Wd = !1;
l.json.Dl = function(a) {
  return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
};
l.json.parse = l.json.Wd ? l.global.JSON.parse : function(a) {
  a = String(a);
  if (l.json.Dl(a)) {
    try {
      return eval("(" + a + ")");
    } catch (c) {
    }
  }
  throw Error("Invalid JSON string: " + a);
};
l.json.tw = l.json.Wd ? l.global.JSON.parse : function(a) {
  return eval("(" + a + ")");
};
l.json.Rh = l.json.Wd ? l.global.JSON.stringify : function(a, c) {
  return (new l.json.ua(c)).Rh(a);
};
l.json.ua = function(a) {
  this.pd = a;
};
l.json.ua.prototype.Rh = function(a) {
  var c = [];
  this.Ve(a, c);
  return c.join("");
};
l.json.ua.prototype.Ve = function(a, c) {
  if (null == a) {
    c.push("null");
  } else {
    if ("object" == typeof a) {
      if (l.isArray(a)) {
        this.Lm(a, c);
        return;
      }
      if (a instanceof String || a instanceof Number || a instanceof Boolean) {
        a = a.valueOf();
      } else {
        this.Nm(a, c);
        return;
      }
    }
    switch(typeof a) {
      case "string":
        this.Sh(a, c);
        break;
      case "number":
        this.Mm(a, c);
        break;
      case "boolean":
        c.push(a);
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof a);;
    }
  }
};
l.json.ua.dg = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
l.json.ua.Uj = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
l.json.ua.prototype.Sh = function(a, c) {
  c.push('"', a.replace(l.json.ua.Uj, function(a) {
    var c = l.json.ua.dg[a];
    c || (c = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), l.json.ua.dg[a] = c);
    return c;
  }), '"');
};
l.json.ua.prototype.Mm = function(a, c) {
  c.push(isFinite(a) && !isNaN(a) ? a : "null");
};
l.json.ua.prototype.Lm = function(a, c) {
  var d = a.length;
  c.push("[");
  for (var e = "", f = 0;f < d;f++) {
    c.push(e), e = a[f], this.Ve(this.pd ? this.pd.call(a, String(f), e) : e, c), e = ",";
  }
  c.push("]");
};
l.json.ua.prototype.Nm = function(a, c) {
  c.push("{");
  var d = "", e;
  for (e in a) {
    if (Object.prototype.hasOwnProperty.call(a, e)) {
      var f = a[e];
      "function" != typeof f && (c.push(d), this.Sh(e, c), c.push(":"), this.Ve(this.pd ? this.pd.call(a, e, f) : f, c), d = ",");
    }
  }
  c.push("}");
};
l.debug = {};
l.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, l.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
l.wb(l.debug.Error, Error);
l.debug.Error.prototype.name = "CustomError";
l.ka = {};
l.ka.Qi = {mi:1, Bn:2, TEXT:3, Un:4, bp:5, ap:6, ur:7, fo:8, Do:9, Fo:10, Eo:11, Uq:12};
l.f = {};
l.f.zd = !1;
l.f.ti = !1;
l.f.sj = {Oi:"\u00a0"};
l.f.startsWith = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
l.f.endsWith = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
l.f.et = function(a, c) {
  return 0 == l.f.cg(c, a.substr(0, c.length));
};
l.f.ct = function(a, c) {
  return 0 == l.f.cg(c, a.substr(a.length - c.length, c.length));
};
l.f.dt = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
l.f.Wm = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
l.f.mt = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
l.f.ze = function(a) {
  return /^[\s\xa0]*$/.test(a);
};
l.f.Cu = function(a) {
  return 0 == a.length;
};
l.f.wa = l.f.ze;
l.f.ml = function(a) {
  return l.f.ze(l.f.Ql(a));
};
l.f.Bu = l.f.ml;
l.f.xu = function(a) {
  return !/[^\t\n\r ]/.test(a);
};
l.f.uu = function(a) {
  return !/[^a-zA-Z]/.test(a);
};
l.f.Nu = function(a) {
  return !/[^0-9]/.test(a);
};
l.f.vu = function(a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
l.f.Tu = function(a) {
  return " " == a;
};
l.f.Uu = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
l.f.ew = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
l.f.at = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
l.f.pv = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
l.f.ov = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
l.f.lt = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
l.f.trim = l.Ud && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
l.f.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
l.f.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
l.f.cg = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
l.f.Ah = /(\.\d+)|(\d+)|(\D+)/g;
l.f.rv = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(l.f.Ah), e = c.toLowerCase().match(l.f.Ah), f = Math.min(d.length, e.length), g = 0;g < f;g++) {
    var h = d[g], k = e[g];
    if (h != k) {
      return d = parseInt(h, 10), !isNaN(d) && (e = parseInt(k, 10), !isNaN(e) && d - e) ? d - e : h < k ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
l.f.vw = function(a) {
  return encodeURIComponent(String(a));
};
l.f.uw = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
l.f.xh = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
l.f.Wa = function(a, c) {
  if (c) {
    a = a.replace(l.f.af, "&amp;").replace(l.f.Ff, "&lt;").replace(l.f.wf, "&gt;").replace(l.f.Nf, "&quot;").replace(l.f.Qf, "&#39;").replace(l.f.If, "&#0;"), l.f.zd && (a = a.replace(l.f.sf, "&#101;"));
  } else {
    if (!l.f.ci.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(l.f.af, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(l.f.Ff, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(l.f.wf, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(l.f.Nf, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(l.f.Qf, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(l.f.If, "&#0;"));
    l.f.zd && -1 != a.indexOf("e") && (a = a.replace(l.f.sf, "&#101;"));
  }
  return a;
};
l.f.af = /&/g;
l.f.Ff = /</g;
l.f.wf = />/g;
l.f.Nf = /"/g;
l.f.Qf = /'/g;
l.f.If = /\x00/g;
l.f.sf = /e/g;
l.f.ci = l.f.zd ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
l.f.Xh = function(a) {
  return l.f.contains(a, "&") ? !l.f.ti && "document" in l.global ? l.f.Yh(a) : l.f.en(a) : a;
};
l.f.pw = function(a, c) {
  return l.f.contains(a, "&") ? l.f.Yh(a, c) : a;
};
l.f.Yh = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : l.global.document.createElement("div");
  return a.replace(l.f.Bi, function(a, c) {
    var h = d[a];
    if (h) {
      return h;
    }
    if ("#" == c.charAt(0)) {
      var k = Number("0" + c.substr(1));
      isNaN(k) || (h = String.fromCharCode(k));
    }
    h || (e.innerHTML = a + " ", h = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = h;
  });
};
l.f.en = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
l.f.Bi = /&([^;\s<&]+);?/g;
l.f.jn = function(a, c) {
  return l.f.xh(a.replace(/  /g, " &#160;"), c);
};
l.f.wv = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + l.f.sj.Oi);
};
l.f.fw = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
l.f.truncate = function(a, c, d) {
  d && (a = l.f.Xh(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = l.f.Wa(a));
  return a;
};
l.f.nw = function(a, c, d, e) {
  d && (a = l.f.Xh(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = l.f.Wa(a));
  return a;
};
l.f.Xe = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
l.f.dd = {"'":"\\'"};
l.f.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = l.f.Xe[e] || (31 < f && 127 > f ? e : l.f.qg(e));
  }
  c.push('"');
  return c.join("");
};
l.f.Ot = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = l.f.qg(a.charAt(d));
  }
  return c.join("");
};
l.f.qg = function(a) {
  if (a in l.f.dd) {
    return l.f.dd[a];
  }
  if (a in l.f.Xe) {
    return l.f.dd[a] = l.f.Xe[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return l.f.dd[a] = c;
};
l.f.contains = function(a, c) {
  return -1 != a.indexOf(c);
};
l.f.Sj = function(a, c) {
  return l.f.contains(a.toLowerCase(), c.toLowerCase());
};
l.f.ut = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
l.f.Vb = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
l.f.remove = function(a, c) {
  var d = new RegExp(l.f.Se(c), "");
  return a.replace(d, "");
};
l.f.removeAll = function(a, c) {
  var d = new RegExp(l.f.Se(c), "g");
  return a.replace(d, "");
};
l.f.Se = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
l.f.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
l.f.vv = function(a, c, d) {
  a = l.ha(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return l.f.repeat("0", Math.max(0, c - d)) + a;
};
l.f.Ql = function(a) {
  return null == a ? "" : String(a);
};
l.f.Xs = function(a) {
  return Array.prototype.join.call(arguments, "");
};
l.f.eu = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ l.now()).toString(36);
};
l.f.hc = function(a, c) {
  for (var d = 0, e = l.f.trim(String(a)).split("."), f = l.f.trim(String(c)).split("."), g = Math.max(e.length, f.length), h = 0;0 == d && h < g;h++) {
    var k = e[h] || "", n = f[h] || "", t = /(\d*)(\D*)/g, I = /(\d*)(\D*)/g;
    do {
      var q = t.exec(k) || ["", "", ""], u = I.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == u[0].length) {
        break;
      }
      d = l.f.Yd(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || l.f.Yd(0 == q[2].length, 0 == u[2].length) || l.f.Yd(q[2], u[2]);
    } while (0 == d);
  }
  return d;
};
l.f.Yd = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
l.f.Ai = 4294967296;
l.f.qu = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= l.f.Ai;
  }
  return c;
};
l.f.gn = 2147483648 * Math.random() | 0;
l.f.zt = function() {
  return "goog_" + l.f.gn++;
};
l.f.kw = function(a) {
  var c = Number(a);
  return 0 == c && l.f.ze(a) ? NaN : c;
};
l.f.Hu = function(a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
l.f.Vu = function(a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
l.f.jw = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
l.f.lw = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
l.f.mw = function(a, c) {
  var d = l.G(c) ? l.f.Se(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
l.f.bt = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
l.f.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return l.G(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
l.f.$v = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
l.f.Ht = function(a, c) {
  var d = [], e = [];
  if (a == c) {
    return 0;
  }
  if (!a.length || !c.length) {
    return Math.max(a.length, c.length);
  }
  for (var f = 0;f < c.length + 1;f++) {
    d[f] = f;
  }
  for (f = 0;f < a.length;f++) {
    e[0] = f + 1;
    for (var g = 0;g < c.length;g++) {
      e[g + 1] = Math.min(e[g] + 1, d[g + 1] + 1, d[g] + (a[f] != c[g]));
    }
    for (g = 0;g < d.length;g++) {
      d[g] = e[g];
    }
  }
  return e[c.length];
};
l.l = {};
l.l.ya = l.na;
l.l.Gc = function(a, c) {
  c.unshift(a);
  l.debug.Error.call(this, l.f.Wm.apply(null, c));
  c.shift();
};
l.wb(l.l.Gc, l.debug.Error);
l.l.Gc.prototype.name = "AssertionError";
l.l.ji = function(a) {
  throw a;
};
l.l.ce = l.l.ji;
l.l.Va = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), g = e
  } else {
    a && (f += ": " + a, g = c);
  }
  a = new l.l.Gc("" + f, g || []);
  l.l.ce(a);
};
l.l.Sv = function(a) {
  l.l.ya && (l.l.ce = a);
};
l.l.assert = function(a, c, d) {
  l.l.ya && !a && l.l.Va("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.qa = function(a, c) {
  l.l.ya && l.l.ce(new l.l.Gc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
l.l.Os = function(a, c, d) {
  l.l.ya && !l.yc(a) && l.l.Va("Expected number but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Rs = function(a, c, d) {
  l.l.ya && !l.G(a) && l.l.Va("Expected string but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ms = function(a, c, d) {
  l.l.ya && !l.Ma(a) && l.l.Va("Expected function but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ps = function(a, c, d) {
  l.l.ya && !l.Rb(a) && l.l.Va("Expected object but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Js = function(a, c, d) {
  l.l.ya && !l.isArray(a) && l.l.Va("Expected array but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ks = function(a, c, d) {
  l.l.ya && !l.bd(a) && l.l.Va("Expected boolean but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ls = function(a, c, d) {
  !l.l.ya || l.Rb(a) && a.nodeType == l.ka.Qi.mi || l.l.Va("Expected Element but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ns = function(a, c, d, e) {
  !l.l.ya || a instanceof c || l.l.Va("Expected instanceof %s but got %s.", [l.l.Mg(c), l.l.Mg(a)], d, Array.prototype.slice.call(arguments, 3));
  return a;
};
l.l.Qs = function() {
  for (var a in Object.prototype) {
    l.l.qa(a + " should not be enumerable in Object.prototype.");
  }
};
l.l.Mg = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
l.c = {};
l.Pa = l.Ud;
l.c.Oa = !1;
l.c.im = function(a) {
  return a[a.length - 1];
};
l.c.Xu = l.c.im;
l.c.M = Array.prototype;
l.c.indexOf = l.Pa && (l.c.Oa || l.c.M.indexOf) ? function(a, c, d) {
  return l.c.M.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (l.G(a)) {
    return l.G(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
l.c.lastIndexOf = l.Pa && (l.c.Oa || l.c.M.lastIndexOf) ? function(a, c, d) {
  return l.c.M.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (l.G(a)) {
    return l.G(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
l.c.forEach = l.Pa && (l.c.Oa || l.c.M.forEach) ? function(a, c, d) {
  l.c.M.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    g in f && c.call(d, f[g], g, a);
  }
};
l.c.yg = function(a, c, d) {
  for (var e = l.G(a) ? a.split("") : a, f = a.length - 1;0 <= f;--f) {
    f in e && c.call(d, e[f], f, a);
  }
};
l.c.filter = l.Pa && (l.c.Oa || l.c.M.filter) ? function(a, c, d) {
  return l.c.M.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], g = 0, h = l.G(a) ? a.split("") : a, k = 0;k < e;k++) {
    if (k in h) {
      var n = h[k];
      c.call(d, n, k, a) && (f[g++] = n);
    }
  }
  return f;
};
l.c.map = l.Pa && (l.c.Oa || l.c.M.map) ? function(a, c, d) {
  return l.c.M.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), g = l.G(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in g && (f[h] = c.call(d, g[h], h, a));
  }
  return f;
};
l.c.reduce = l.Pa && (l.c.Oa || l.c.M.reduce) ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return l.c.M.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.c.forEach(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.c.reduceRight = l.Pa && (l.c.Oa || l.c.M.reduceRight) ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return l.c.M.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.c.yg(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.c.some = l.Pa && (l.c.Oa || l.c.M.some) ? function(a, c, d) {
  return l.c.M.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return !0;
    }
  }
  return !1;
};
l.c.every = l.Pa && (l.c.Oa || l.c.M.every) ? function(a, c, d) {
  return l.c.M.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && !c.call(d, f[g], g, a)) {
      return !1;
    }
  }
  return !0;
};
l.c.count = function(a, c, d) {
  var e = 0;
  l.c.forEach(a, function(a, g, h) {
    c.call(d, a, g, h) && ++e;
  }, d);
  return e;
};
l.c.find = function(a, c, d) {
  c = l.c.ug(a, c, d);
  return 0 > c ? null : l.G(a) ? a.charAt(c) : a[c];
};
l.c.ug = function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return g;
    }
  }
  return -1;
};
l.c.Rt = function(a, c, d) {
  c = l.c.uk(a, c, d);
  return 0 > c ? null : l.G(a) ? a.charAt(c) : a[c];
};
l.c.uk = function(a, c, d) {
  for (var e = l.G(a) ? a.split("") : a, f = a.length - 1;0 <= f;f--) {
    if (f in e && c.call(d, e[f], f, a)) {
      return f;
    }
  }
  return -1;
};
l.c.contains = function(a, c) {
  return 0 <= l.c.indexOf(a, c);
};
l.c.wa = function(a) {
  return 0 == a.length;
};
l.c.clear = function(a) {
  if (!l.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
l.c.insert = function(a, c) {
  l.c.contains(a, c) || a.push(c);
};
l.c.Sg = function(a, c, d) {
  l.c.splice(a, d, 0, c);
};
l.c.su = function(a, c, d) {
  l.Fh(l.c.splice, a, d, 0).apply(null, c);
};
l.c.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = l.c.indexOf(a, d)) ? a.push(c) : l.c.Sg(a, c, e);
};
l.c.remove = function(a, c) {
  var d = l.c.indexOf(a, c), e;
  (e = 0 <= d) && l.c.Vb(a, d);
  return e;
};
l.c.Vb = function(a, c) {
  return 1 == l.c.M.splice.call(a, c, 1).length;
};
l.c.Dv = function(a, c, d) {
  c = l.c.ug(a, c, d);
  return 0 <= c ? (l.c.Vb(a, c), !0) : !1;
};
l.c.Bv = function(a, c, d) {
  var e = 0;
  l.c.yg(a, function(f, g) {
    c.call(d, f, g, a) && l.c.Vb(a, g) && e++;
  });
  return e;
};
l.c.concat = function(a) {
  return l.c.M.concat.apply(l.c.M, arguments);
};
l.c.join = function(a) {
  return l.c.M.concat.apply(l.c.M, arguments);
};
l.c.kb = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return [];
};
l.c.clone = l.c.kb;
l.c.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d];
    if (l.W(e)) {
      var f = a.length || 0, g = e.length || 0;
      a.length = f + g;
      for (var h = 0;h < g;h++) {
        a[f + h] = e[h];
      }
    } else {
      a.push(e);
    }
  }
};
l.c.splice = function(a, c, d, e) {
  return l.c.M.splice.apply(a, l.c.slice(arguments, 1));
};
l.c.slice = function(a, c, d) {
  return 2 >= arguments.length ? l.c.M.slice.call(a, c) : l.c.M.slice.call(a, c, d);
};
l.c.lm = function(a, c, d) {
  c = c || a;
  var e = function(a) {
    return l.Rb(a) ? "o" + l.tc(a) : (typeof a).charAt(0) + a;
  };
  d = d || e;
  for (var e = {}, f = 0, g = 0;g < a.length;) {
    var h = a[g++], k = d(h);
    Object.prototype.hasOwnProperty.call(e, k) || (e[k] = !0, c[f++] = h);
  }
  c.length = f;
};
l.c.Zf = function(a, c, d) {
  return l.c.$f(a, d || l.c.cb, !1, c);
};
l.c.Us = function(a, c, d) {
  return l.c.$f(a, c, !0, void 0, d);
};
l.c.$f = function(a, c, d, e, f) {
  for (var g = 0, h = a.length, k;g < h;) {
    var n = g + h >> 1, t;
    t = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < t ? g = n + 1 : (h = n, k = !t);
  }
  return k ? g : ~g;
};
l.c.sort = function(a, c) {
  a.sort(c || l.c.cb);
};
l.c.aw = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || l.c.cb;
  l.c.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
l.c.Tm = function(a, c, d) {
  var e = d || l.c.cb;
  l.c.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
l.c.Zv = function(a, c, d) {
  l.c.Tm(a, function(a) {
    return a[c];
  }, d);
};
l.c.jh = function(a, c, d) {
  c = c || l.c.cb;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return !1;
    }
  }
  return !0;
};
l.c.pa = function(a, c, d) {
  if (!l.W(a) || !l.W(c) || a.length != c.length) {
    return !1;
  }
  var e = a.length;
  d = d || l.c.ng;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return !1;
    }
  }
  return !0;
};
l.c.pt = function(a, c, d) {
  d = d || l.c.cb;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var g = d(a[f], c[f]);
    if (0 != g) {
      return g;
    }
  }
  return l.c.cb(a.length, c.length);
};
l.c.cb = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
l.c.tu = function(a, c) {
  return -l.c.cb(a, c);
};
l.c.ng = function(a, c) {
  return a === c;
};
l.c.Ss = function(a, c, d) {
  d = l.c.Zf(a, c, d);
  return 0 > d ? (l.c.Sg(a, c, -(d + 1)), !0) : !1;
};
l.c.Ts = function(a, c, d) {
  c = l.c.Zf(a, c, d);
  return 0 <= c ? l.c.Vb(a, c) : !1;
};
l.c.Ws = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var g = a[f], h = c.call(d, g, f, a);
    l.ha(h) && (e[h] || (e[h] = [])).push(g);
  }
  return e;
};
l.c.an = function(a, c, d) {
  var e = {};
  l.c.forEach(a, function(f, g) {
    e[c.call(d, f, g, a)] = f;
  });
  return e;
};
l.c.od = function(a, c, d) {
  var e = [], f = 0, g = a;
  d = d || 1;
  void 0 !== c && (f = a, g = c);
  if (0 > d * (g - f)) {
    return [];
  }
  if (0 < d) {
    for (a = f;a < g;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > g;a += d) {
      e.push(a);
    }
  }
  return e;
};
l.c.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
l.c.wk = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (l.isArray(e)) {
      for (var f = 0;f < e.length;f += 8192) {
        for (var g = l.c.slice(e, f, f + 8192), g = l.c.wk.apply(null, g), h = 0;h < g.length;h++) {
          c.push(g[h]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
l.c.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? l.c.M.unshift.apply(a, a.splice(-c, c)) : 0 > c && l.c.M.push.apply(a, a.splice(0, -c)));
  return a;
};
l.c.kv = function(a, c, d) {
  c = l.c.M.splice.call(a, c, 1);
  l.c.M.splice.call(a, d, 0, c[0]);
};
l.c.bi = function(a) {
  if (!arguments.length) {
    return [];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var g = arguments[f];
      if (d >= g.length) {
        return c;
      }
      e.push(g[d]);
    }
    c.push(e);
  }
};
l.c.Yv = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), g = a[e];
    a[e] = a[f];
    a[f] = g;
  }
};
l.c.tt = function(a, c) {
  var d = [];
  l.c.forEach(c, function(c) {
    d.push(a[c]);
  });
  return d;
};
l.ka.pb = {pn:"A", qn:"ABBR", rn:"ACRONYM", sn:"ADDRESS", xn:"APPLET", yn:"AREA", zn:"ARTICLE", An:"ASIDE", AUDIO:"AUDIO", Cn:"B", Dn:"BASE", En:"BASEFONT", Fn:"BDI", Gn:"BDO", Mn:"BIG", Nn:"BLOCKQUOTE", Pn:"BODY", Qn:"BR", Rn:"BUTTON", Sn:"CANVAS", Tn:"CAPTION", Vn:"CENTER", Xn:"CITE", ao:"CODE", bo:"COL", co:"COLGROUP", eo:"COMMAND", qo:"DATA", ro:"DATALIST", to:"DD", vo:"DEL", wo:"DETAILS", xo:"DFN", yo:"DIALOG", zo:"DIR", Ao:"DIV", Bo:"DL", Vo:"DT", Yo:"EM", EMBED:"EMBED", gp:"FIELDSET", hp:"FIGCAPTION", 
ip:"FIGURE", FONT:"FONT", mp:"FOOTER", FORM:"FORM", FRAME:"FRAME", np:"FRAMESET", pp:"H1", qp:"H2", rp:"H3", sp:"H4", tp:"H5", up:"H6", zp:"HEAD", Ap:"HEADER", Cp:"HGROUP", Dp:"HR", Ep:"HTML", Gp:"I", IFRAME:"IFRAME", Lp:"IMG", Ei:"INPUT", Np:"INS", Rp:"ISINDEX", Sp:"KBD", Up:"KEYGEN", Xp:"LABEL", Yp:"LEGEND", Zp:"LI", Gi:"LINK", jq:"MAP", kq:"MARK", lq:"MATH", nq:"MENU", pq:"META", qq:"METER", Rq:"NAV", Sq:"NOFRAMES", Tq:"NOSCRIPT", OBJECT:"OBJECT", Xq:"OL", Zq:"OPTGROUP", $q:"OPTION", cr:"OUTPUT", 
dr:"P", gr:"PARAM", tr:"PRE", vr:"PROGRESS", Q:"Q", Cr:"RP", Dr:"RT", Er:"RUBY", Fr:"S", Hr:"SAMP", SCRIPT:"SCRIPT", Jr:"SECTION", kj:"SELECT", Mr:"SMALL", Nr:"SOURCE", Or:"SPAN", Qr:"STRIKE", Rr:"STRONG", STYLE:"STYLE", Sr:"SUB", Ur:"SUMMARY", Vr:"SUP", Wr:"SVG", Xr:"TABLE", Yr:"TBODY", Zr:"TD", oj:"TEMPLATE", $r:"TEXTAREA", bs:"TFOOT", cs:"TH", ds:"THEAD", es:"TIME", fs:"TITLE", ms:"TR", TRACK:"TRACK", ps:"TT", rs:"U", ss:"UL", vs:"VAR", VIDEO:"VIDEO", xs:"WBR"};
l.object = {};
l.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
l.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
l.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
l.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return !0;
    }
  }
  return !1;
};
l.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return !1;
    }
  }
  return !0;
};
l.object.va = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
l.object.Wt = function(a) {
  for (var c in a) {
    return c;
  }
};
l.object.Xt = function(a) {
  for (var c in a) {
    return a[c];
  }
};
l.object.contains = function(a, c) {
  return l.object.jc(a, c);
};
l.object.V = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
l.object.ma = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
l.object.ju = function(a, c) {
  for (var d = l.W(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], l.ha(a));d++) {
  }
  return a;
};
l.object.Jb = function(a, c) {
  return c in a;
};
l.object.jc = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return !0;
    }
  }
  return !1;
};
l.object.vk = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
l.object.St = function(a, c, d) {
  return (c = l.object.vk(a, c, d)) && a[c];
};
l.object.wa = function(a) {
  for (var c in a) {
    return !1;
  }
  return !0;
};
l.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
l.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
l.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  l.object.set(a, c, d);
};
l.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
l.object.set = function(a, c, d) {
  a[c] = d;
};
l.object.Uv = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
l.object.Xv = function(a, c, d) {
  if (c in a) {
    return a[c];
  }
  d = d();
  return a[c] = d;
};
l.object.pa = function(a, c) {
  for (var d in a) {
    if (!(d in c) || a[d] !== c[d]) {
      return !1;
    }
  }
  for (d in c) {
    if (!(d in a)) {
      return !1;
    }
  }
  return !0;
};
l.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
l.object.hn = function(a) {
  var c = l.xa(a);
  if ("object" == c || "array" == c) {
    if (l.Ma(a.clone)) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.object.hn(a[d]);
    }
    return c;
  }
  return a;
};
l.object.bn = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
l.object.Mf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
l.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var g = 0;g < l.object.Mf.length;g++) {
      d = l.object.Mf[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
l.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
l.object.ig = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.ig.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
l.object.xt = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
l.object.Eu = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
l.ka.tags = {};
l.ka.tags.Aj = {area:!0, base:!0, br:!0, col:!0, command:!0, embed:!0, hr:!0, img:!0, input:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, wbr:!0};
l.ka.tags.El = function(a) {
  return !0 === l.ka.tags.Aj[a];
};
l.i18n = {};
l.i18n.g = {};
l.i18n.g.ui = !1;
l.i18n.g.Ef = l.i18n.g.ui || ("ar" == l.da.substring(0, 2).toLowerCase() || "fa" == l.da.substring(0, 2).toLowerCase() || "he" == l.da.substring(0, 2).toLowerCase() || "iw" == l.da.substring(0, 2).toLowerCase() || "ps" == l.da.substring(0, 2).toLowerCase() || "sd" == l.da.substring(0, 2).toLowerCase() || "ug" == l.da.substring(0, 2).toLowerCase() || "ur" == l.da.substring(0, 2).toLowerCase() || "yi" == l.da.substring(0, 2).toLowerCase()) && (2 == l.da.length || "-" == l.da.substring(2, 3) || "_" == 
l.da.substring(2, 3)) || 3 <= l.da.length && "ckb" == l.da.substring(0, 3).toLowerCase() && (3 == l.da.length || "-" == l.da.substring(3, 4) || "_" == l.da.substring(3, 4));
l.i18n.g.Fb = {Ii:"\u202a", cj:"\u202b", Kf:"\u202c", Ji:"\u200e", dj:"\u200f"};
l.i18n.g.T = {mb:1, ob:-1, Qa:0};
l.i18n.g.ec = "right";
l.i18n.g.dc = "left";
l.i18n.g.Ip = l.i18n.g.Ef ? l.i18n.g.dc : l.i18n.g.ec;
l.i18n.g.Hp = l.i18n.g.Ef ? l.i18n.g.ec : l.i18n.g.dc;
l.i18n.g.$m = function(a, c) {
  return "number" == typeof a ? 0 < a ? l.i18n.g.T.mb : 0 > a ? l.i18n.g.T.ob : c ? null : l.i18n.g.T.Qa : null == a ? null : a ? l.i18n.g.T.ob : l.i18n.g.T.mb;
};
l.i18n.g.Sb = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
l.i18n.g.Xb = "\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
l.i18n.g.hl = /<[^>]*>|&[^;]+;/g;
l.i18n.g.jb = function(a, c) {
  return c ? a.replace(l.i18n.g.hl, "") : a;
};
l.i18n.g.pm = new RegExp("[" + l.i18n.g.Xb + "]");
l.i18n.g.Ml = new RegExp("[" + l.i18n.g.Sb + "]");
l.i18n.g.$c = function(a, c) {
  return l.i18n.g.pm.test(l.i18n.g.jb(a, c));
};
l.i18n.g.ou = l.i18n.g.$c;
l.i18n.g.Og = function(a, c) {
  return l.i18n.g.Ml.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Pl = new RegExp("^[" + l.i18n.g.Sb + "]");
l.i18n.g.um = new RegExp("^[" + l.i18n.g.Xb + "]");
l.i18n.g.Al = function(a) {
  return l.i18n.g.um.test(a);
};
l.i18n.g.vl = function(a) {
  return l.i18n.g.Pl.test(a);
};
l.i18n.g.Lu = function(a) {
  return !l.i18n.g.vl(a) && !l.i18n.g.Al(a);
};
l.i18n.g.Nl = new RegExp("^[^" + l.i18n.g.Xb + "]*[" + l.i18n.g.Sb + "]");
l.i18n.g.rm = new RegExp("^[^" + l.i18n.g.Sb + "]*[" + l.i18n.g.Xb + "]");
l.i18n.g.Th = function(a, c) {
  return l.i18n.g.rm.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Ru = l.i18n.g.Th;
l.i18n.g.Um = function(a, c) {
  return l.i18n.g.Nl.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Ju = l.i18n.g.Um;
l.i18n.g.hh = /^http:\/\/.*/;
l.i18n.g.Mu = function(a, c) {
  a = l.i18n.g.jb(a, c);
  return l.i18n.g.hh.test(a) || !l.i18n.g.Og(a) && !l.i18n.g.$c(a);
};
l.i18n.g.Ol = new RegExp("[" + l.i18n.g.Sb + "][^" + l.i18n.g.Xb + "]*$");
l.i18n.g.sm = new RegExp("[" + l.i18n.g.Xb + "][^" + l.i18n.g.Sb + "]*$");
l.i18n.g.nk = function(a, c) {
  return l.i18n.g.Ol.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Iu = l.i18n.g.nk;
l.i18n.g.pk = function(a, c) {
  return l.i18n.g.sm.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Pu = l.i18n.g.pk;
l.i18n.g.tm = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
l.i18n.g.Qu = function(a) {
  return l.i18n.g.tm.test(a);
};
l.i18n.g.ag = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g;
l.i18n.g.Oj = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
l.i18n.g.mu = function(a, c) {
  return (void 0 === c ? l.i18n.g.$c(a) : c) ? a.replace(l.i18n.g.ag, "<span dir=rtl>$&</span>") : a.replace(l.i18n.g.ag, "<span dir=ltr>$&</span>");
};
l.i18n.g.nu = function(a, c) {
  var d = (void 0 === c ? l.i18n.g.$c(a) : c) ? l.i18n.g.Fb.dj : l.i18n.g.Fb.Ji;
  return a.replace(l.i18n.g.Oj, d + "$&" + d);
};
l.i18n.g.Kt = function(a) {
  return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>";
};
l.i18n.g.Lt = function(a) {
  return l.i18n.g.Fb.cj + a + l.i18n.g.Fb.Kf;
};
l.i18n.g.It = function(a) {
  return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>";
};
l.i18n.g.Jt = function(a) {
  return l.i18n.g.Fb.Ii + a + l.i18n.g.Fb.Kf;
};
l.i18n.g.fk = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
l.i18n.g.Gl = /left/gi;
l.i18n.g.om = /right/gi;
l.i18n.g.Xm = /%%%%/g;
l.i18n.g.hv = function(a) {
  return a.replace(l.i18n.g.fk, ":$1 $4 $3 $2").replace(l.i18n.g.Gl, "%%%%").replace(l.i18n.g.om, l.i18n.g.dc).replace(l.i18n.g.Xm, l.i18n.g.ec);
};
l.i18n.g.mk = /([\u0591-\u05f2])"/g;
l.i18n.g.Sm = /([\u0591-\u05f2])'/g;
l.i18n.g.mv = function(a) {
  return a.replace(l.i18n.g.mk, "$1\u05f4").replace(l.i18n.g.Sm, "$1\u05f3");
};
l.i18n.g.kn = /\s+/;
l.i18n.g.cl = /[\d\u06f0-\u06f9]/;
l.i18n.g.qm = .4;
l.i18n.g.rg = function(a, c) {
  for (var d = 0, e = 0, f = !1, g = l.i18n.g.jb(a, c).split(l.i18n.g.kn), h = 0;h < g.length;h++) {
    var k = g[h];
    l.i18n.g.Th(k) ? (d++, e++) : l.i18n.g.hh.test(k) ? f = !0 : l.i18n.g.Og(k) ? e++ : l.i18n.g.cl.test(k) && (f = !0);
  }
  return 0 == e ? f ? l.i18n.g.T.mb : l.i18n.g.T.Qa : d / e > l.i18n.g.qm ? l.i18n.g.T.ob : l.i18n.g.T.mb;
};
l.i18n.g.Ft = function(a, c) {
  return l.i18n.g.rg(a, c) == l.i18n.g.T.ob;
};
l.i18n.g.Qv = function(a, c) {
  a && (c = l.i18n.g.$m(c)) && (a.style.textAlign = c == l.i18n.g.T.ob ? l.i18n.g.ec : l.i18n.g.dc, a.dir = c == l.i18n.g.T.ob ? "rtl" : "ltr");
};
l.i18n.g.Rv = function(a, c) {
  switch(l.i18n.g.rg(c)) {
    case l.i18n.g.T.mb:
      a.dir = "ltr";
      break;
    case l.i18n.g.T.ob:
      a.dir = "rtl";
      break;
    default:
      a.removeAttribute("dir");
  }
};
l.i18n.g.Wo = function() {
};
l.f.qs = function() {
};
l.f.S = function() {
  this.rd = "";
  this.nj = l.f.S.Sf;
};
l.f.S.prototype.Xa = !0;
l.f.S.prototype.La = function() {
  return this.rd;
};
l.f.S.prototype.toString = function() {
  return "Const{" + this.rd + "}";
};
l.f.S.P = function(a) {
  if (a instanceof l.f.S && a.constructor === l.f.S && a.nj === l.f.S.Sf) {
    return a.rd;
  }
  l.l.qa("expected object of type Const, got '" + a + "'");
  return "type_error:Const";
};
l.f.S.he = function(a) {
  return l.f.S.ak(a);
};
l.f.S.Sf = {};
l.f.S.ak = function(a) {
  var c = new l.f.S;
  c.rd = a;
  return c;
};
l.b = {};
l.b.I = function() {
  this.ld = "";
  this.fj = l.b.I.fa;
};
l.b.I.prototype.Xa = !0;
l.b.I.fa = {};
l.b.I.qc = function(a) {
  a = l.f.S.P(a);
  return 0 === a.length ? l.b.I.EMPTY : l.b.I.kc(a);
};
l.b.I.ht = function() {
};
l.b.I.prototype.La = function() {
  return this.ld;
};
l.na && (l.b.I.prototype.toString = function() {
  return "SafeStyle{" + this.ld + "}";
});
l.b.I.P = function(a) {
  if (a instanceof l.b.I && a.constructor === l.b.I && a.fj === l.b.I.fa) {
    return a.ld;
  }
  l.l.qa("expected object of type SafeStyle, got '" + a + "'");
  return "type_error:SafeStyle";
};
l.b.I.kc = function(a) {
  return (new l.b.I).xb(a);
};
l.b.I.prototype.xb = function(a) {
  this.ld = a;
  return this;
};
l.b.I.EMPTY = l.b.I.kc("");
l.b.I.Gb = "zClosurez";
l.b.I.create = function(a) {
  var c = "", d;
  for (d in a) {
    if (!/^[-_a-zA-Z0-9]+$/.test(d)) {
      throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
    }
    var e = a[d];
    null != e && (e instanceof l.f.S ? e = l.f.S.P(e) : l.b.I.zj.test(e) ? l.b.I.Xk(e) || (l.l.qa("String value requires balanced quotes, got: " + e), e = l.b.I.Gb) : (l.l.qa("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " + e), e = l.b.I.Gb), c += d + ":" + e + ";");
  }
  return c ? l.b.I.kc(c) : l.b.I.EMPTY;
};
l.b.I.Xk = function(a) {
  for (var c = !0, d = !0, e = 0;e < a.length;e++) {
    var f = a.charAt(e);
    "'" == f && d ? c = !c : '"' == f && c && (d = !d);
  }
  return c && d;
};
l.b.I.zj = /^[-,."'%_!# a-zA-Z0-9]+$/;
l.b.I.concat = function(a) {
  var c = "", d = function(a) {
    l.isArray(a) ? l.c.forEach(a, d) : c += l.b.I.P(a);
  };
  l.c.forEach(arguments, d);
  return c ? l.b.I.kc(c) : l.b.I.EMPTY;
};
l.b.U = function() {
  this.kd = "";
  this.Qd = l.b.U.fa;
};
l.b.U.prototype.Xa = !0;
l.b.U.fa = {};
l.b.U.concat = function(a) {
  var c = "", d = function(a) {
    l.isArray(a) ? l.c.forEach(a, d) : c += l.b.U.P(a);
  };
  l.c.forEach(arguments, d);
  return l.b.U.Qc(c);
};
l.b.U.qc = function(a) {
  a = l.f.S.P(a);
  return 0 === a.length ? l.b.U.EMPTY : l.b.U.Qc(a);
};
l.b.U.prototype.La = function() {
  return this.kd;
};
l.na && (l.b.U.prototype.toString = function() {
  return "SafeStyleSheet{" + this.kd + "}";
});
l.b.U.P = function(a) {
  if (a instanceof l.b.U && a.constructor === l.b.U && a.Qd === l.b.U.fa) {
    return a.kd;
  }
  l.l.qa("expected object of type SafeStyleSheet, got '" + a + "'");
  return "type_error:SafeStyleSheet";
};
l.b.U.Qc = function(a) {
  return (new l.b.U).xb(a);
};
l.b.U.prototype.xb = function(a) {
  this.kd = a;
  return this;
};
l.b.U.EMPTY = l.b.U.Qc("");
l.Da = {};
l.Da.url = {};
l.Da.url.Yj = function(a) {
  return l.Da.url.Ng().createObjectURL(a);
};
l.Da.url.Gv = function(a) {
  l.Da.url.Ng().revokeObjectURL(a);
};
l.Da.url.Ng = function() {
  var a = l.Da.url.vg();
  if (null != a) {
    return a;
  }
  throw Error("This browser doesn't seem to support blob URLs");
};
l.Da.url.vg = function() {
  return l.ha(l.global.URL) && l.ha(l.global.URL.createObjectURL) ? l.global.URL : l.ha(l.global.webkitURL) && l.ha(l.global.webkitURL.createObjectURL) ? l.global.webkitURL : l.ha(l.global.createObjectURL) ? l.global : null;
};
l.Da.url.Vs = function() {
  return null != l.Da.url.vg();
};
l.b.J = function() {
  this.Za = "";
  this.hj = l.b.J.fa;
};
l.b.J.Gb = "about:invalid#zClosurez";
l.b.J.prototype.Xa = !0;
l.b.J.prototype.La = function() {
  return this.Za;
};
l.b.J.prototype.ve = !0;
l.b.J.prototype.ub = function() {
  return l.i18n.g.T.mb;
};
l.na && (l.b.J.prototype.toString = function() {
  return "SafeUrl{" + this.Za + "}";
});
l.b.J.P = function(a) {
  if (a instanceof l.b.J && a.constructor === l.b.J && a.hj === l.b.J.fa) {
    return a.Za;
  }
  l.l.qa("expected object of type SafeUrl, got '" + a + "'");
  return "type_error:SafeUrl";
};
l.b.J.qc = function(a) {
  return l.b.J.lc(l.f.S.P(a));
};
l.b.Of = /^(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm))$/i;
l.b.J.Ut = function(a) {
  a = l.b.Of.test(a.type) ? l.Da.url.Yj(a) : l.b.J.Gb;
  return l.b.J.lc(a);
};
l.b.ii = /^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i;
l.b.J.Vt = function(a) {
  var c = a.match(l.b.ii), c = c && l.b.Of.test(c[1]);
  return l.b.J.lc(c ? a : l.b.J.Gb);
};
l.b.gj = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
l.b.J.Oh = function(a) {
  if (a instanceof l.b.J) {
    return a;
  }
  a = a.Xa ? a.La() : String(a);
  l.b.gj.test(a) || (a = l.b.J.Gb);
  return l.b.J.lc(a);
};
l.b.J.fa = {};
l.b.J.lc = function(a) {
  var c = new l.b.J;
  c.Za = a;
  return c;
};
l.b.ba = function() {
  this.md = "";
  this.pj = l.b.ba.fa;
};
l.b.ba.prototype.Xa = !0;
l.b.ba.prototype.La = function() {
  return this.md;
};
l.b.ba.prototype.ve = !0;
l.b.ba.prototype.ub = function() {
  return l.i18n.g.T.mb;
};
l.na && (l.b.ba.prototype.toString = function() {
  return "TrustedResourceUrl{" + this.md + "}";
});
l.b.ba.P = function(a) {
  if (a instanceof l.b.ba && a.constructor === l.b.ba && a.pj === l.b.ba.fa) {
    return a.md;
  }
  l.l.qa("expected object of type TrustedResourceUrl, got '" + a + "'");
  return "type_error:TrustedResourceUrl";
};
l.b.ba.qc = function(a) {
  return l.b.ba.jg(l.f.S.P(a));
};
l.b.ba.fa = {};
l.b.ba.jg = function(a) {
  var c = new l.b.ba;
  c.md = a;
  return c;
};
l.b.s = function() {
  this.Za = "";
  this.ej = l.b.s.fa;
  this.Tc = null;
};
l.b.s.prototype.ve = !0;
l.b.s.prototype.ub = function() {
  return this.Tc;
};
l.b.s.prototype.Xa = !0;
l.b.s.prototype.La = function() {
  return this.Za;
};
l.na && (l.b.s.prototype.toString = function() {
  return "SafeHtml{" + this.Za + "}";
});
l.b.s.P = function(a) {
  if (a instanceof l.b.s && a.constructor === l.b.s && a.ej === l.b.s.fa) {
    return a.Za;
  }
  l.l.qa("expected object of type SafeHtml, got '" + a + "'");
  return "type_error:SafeHtml";
};
l.b.s.Wa = function(a) {
  if (a instanceof l.b.s) {
    return a;
  }
  var c = null;
  a.ve && (c = a.ub());
  return l.b.s.Ta(l.f.Wa(a.Xa ? a.La() : String(a)), c);
};
l.b.s.ru = function(a) {
  if (a instanceof l.b.s) {
    return a;
  }
  a = l.b.s.Wa(a);
  return l.b.s.Ta(l.f.xh(l.b.s.P(a)), a.ub());
};
l.b.s.ue = function(a) {
  if (a instanceof l.b.s) {
    return a;
  }
  a = l.b.s.Wa(a);
  return l.b.s.Ta(l.f.jn(l.b.s.P(a)), a.ub());
};
l.b.s.he = l.b.s.Wa;
l.b.s.Tf = /^[a-zA-Z0-9-]+$/;
l.b.s.rj = {action:!0, cite:!0, data:!0, formaction:!0, href:!0, manifest:!0, poster:!0, src:!0};
l.b.s.Pi = l.object.ig(l.ka.pb.EMBED, l.ka.pb.IFRAME, l.ka.pb.Gi, l.ka.pb.OBJECT, l.ka.pb.SCRIPT, l.ka.pb.STYLE, l.ka.pb.oj);
l.b.s.create = function(a, c, d) {
  if (!l.b.s.Tf.test(a)) {
    throw Error("Invalid tag name <" + a + ">.");
  }
  if (a.toUpperCase() in l.b.s.Pi) {
    throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
  }
  return l.b.s.$d(a, c, d);
};
l.b.s.wt = function(a, c, d, e) {
  var f = {};
  f.src = a || null;
  f.srcdoc = c || null;
  a = l.b.s.eg(f, {sandbox:""}, d);
  return l.b.s.$d("iframe", a, e);
};
l.b.s.yt = function(a, c) {
  var d = l.b.s.eg({type:"text/css"}, {}, c), e = "";
  a = l.c.concat(a);
  for (var f = 0;f < a.length;f++) {
    e += l.b.U.P(a[f]);
  }
  e = l.b.s.Ta(e, l.i18n.g.T.Qa);
  return l.b.s.$d("style", d, e);
};
l.b.s.yk = function(a, c, d) {
  if (d instanceof l.f.S) {
    d = l.f.S.P(d);
  } else {
    if ("style" == c.toLowerCase()) {
      d = l.b.s.Qk(d);
    } else {
      if (/^on/i.test(c)) {
        throw Error('Attribute "' + c + '" requires goog.string.Const value, "' + d + '" given.');
      }
      if (c.toLowerCase() in l.b.s.rj) {
        if (d instanceof l.b.ba) {
          d = l.b.ba.P(d);
        } else {
          if (d instanceof l.b.J) {
            d = l.b.J.P(d);
          } else {
            if (l.G(d)) {
              d = l.b.J.Oh(d).La();
            } else {
              throw Error('Attribute "' + c + '" on tag "' + a + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + d + '" given.');
            }
          }
        }
      }
    }
  }
  d.Xa && (d = d.La());
  return c + '="' + l.f.Wa(String(d)) + '"';
};
l.b.s.Qk = function(a) {
  if (!l.Rb(a)) {
    throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
  }
  a instanceof l.b.I || (a = l.b.I.create(a));
  return l.b.I.P(a);
};
l.b.s.At = function(a, c, d, e) {
  c = l.b.s.create(c, d, e);
  c.Tc = a;
  return c;
};
l.b.s.concat = function(a) {
  var c = l.i18n.g.T.Qa, d = "", e = function(a) {
    l.isArray(a) ? l.c.forEach(a, e) : (a = l.b.s.Wa(a), d += l.b.s.P(a), a = a.ub(), c == l.i18n.g.T.Qa ? c = a : a != l.i18n.g.T.Qa && c != a && (c = null));
  };
  l.c.forEach(arguments, e);
  return l.b.s.Ta(d, c);
};
l.b.s.st = function(a, c) {
  var d = l.b.s.concat(l.c.slice(arguments, 1));
  d.Tc = a;
  return d;
};
l.b.s.fa = {};
l.b.s.Ta = function(a, c) {
  return (new l.b.s).xb(a, c);
};
l.b.s.prototype.xb = function(a, c) {
  this.Za = a;
  this.Tc = c;
  return this;
};
l.b.s.$d = function(a, c, d) {
  var e = null, f = "<" + a;
  if (c) {
    for (var g in c) {
      if (!l.b.s.Tf.test(g)) {
        throw Error('Invalid attribute name "' + g + '".');
      }
      var h = c[g];
      l.cd(h) && (f += " " + l.b.s.yk(a, g, h));
    }
  }
  l.cd(d) ? l.isArray(d) || (d = [d]) : d = [];
  l.ka.tags.El(a.toLowerCase()) ? f += ">" : (e = l.b.s.concat(d), f += ">" + l.b.s.P(e) + "</" + a + ">", e = e.ub());
  (a = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(a) ? l.i18n.g.T.Qa : null);
  return l.b.s.Ta(f, e);
};
l.b.s.eg = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = a[f];
  }
  for (f in c) {
    e[f] = c[f];
  }
  for (f in d) {
    var g = f.toLowerCase();
    if (g in a) {
      throw Error('Cannot override "' + g + '" attribute, got "' + f + '" with value "' + d[f] + '"');
    }
    g in c && delete e[g];
    e[f] = d[f];
  }
  return e;
};
l.b.s.Co = l.b.s.Ta("<!DOCTYPE html>", l.i18n.g.T.Qa);
l.b.s.EMPTY = l.b.s.Ta("", l.i18n.g.T.Qa);
l.b.aa = function() {
  this.jd = "";
  this.Qd = l.b.aa.fa;
};
l.b.aa.prototype.Xa = !0;
l.b.aa.fa = {};
l.b.aa.qc = function(a) {
  a = l.f.S.P(a);
  return 0 === a.length ? l.b.aa.EMPTY : l.b.aa.ae(a);
};
l.b.aa.prototype.La = function() {
  return this.jd;
};
l.na && (l.b.aa.prototype.toString = function() {
  return "SafeScript{" + this.jd + "}";
});
l.b.aa.P = function(a) {
  if (a instanceof l.b.aa && a.constructor === l.b.aa && a.Qd === l.b.aa.fa) {
    return a.jd;
  }
  l.l.qa("expected object of type SafeScript, got '" + a + "'");
  return "type_error:SafeScript";
};
l.b.aa.ae = function(a) {
  return (new l.b.aa).xb(a);
};
l.b.aa.prototype.xb = function(a) {
  this.jd = a;
  return this;
};
l.b.aa.EMPTY = l.b.aa.ae("");
l.b.Eb = {};
l.b.Eb.Lv = function(a, c, d) {
  return l.b.s.Ta(c, d || null);
};
l.b.Eb.Mv = function(a, c) {
  return l.b.aa.ae(c);
};
l.b.Eb.Nv = function(a, c) {
  return l.b.I.kc(c);
};
l.b.Eb.Ov = function(a, c) {
  return l.b.U.Qc(c);
};
l.b.Eb.vm = function(a, c) {
  return l.b.J.lc(c);
};
l.b.Eb.ow = function(a, c) {
  return l.b.ba.jg(c);
};
l.A = {};
l.A.po = function() {
};
l.L = {};
l.L.ic = function(a) {
  return function() {
    return a;
  };
};
l.L.fp = l.L.ic(!1);
l.L.os = l.L.ic(!0);
l.L.Vq = l.L.ic(null);
l.L.identity = function(a) {
  return a;
};
l.L.error = function(a) {
  return function() {
    throw Error(a);
  };
};
l.L.qa = function(a) {
  return function() {
    throw a;
  };
};
l.L.bv = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
l.L.qv = function(a) {
  return function() {
    return arguments[a];
  };
};
l.L.xw = function(a, c) {
  return l.L.Km(a, l.L.ic(c));
};
l.L.Nt = function(a, c) {
  return function(d) {
    return c ? a == d : a === d;
  };
};
l.L.qt = function(a, c) {
  var d = arguments, e = d.length;
  return function() {
    var a;
    e && (a = d[e - 1].apply(this, arguments));
    for (var c = e - 2;0 <= c;c--) {
      a = d[c].call(this, a);
    }
    return a;
  };
};
l.L.Km = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
l.L.Es = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (!c[a].apply(this, arguments)) {
        return !1;
      }
    }
    return !0;
  };
};
l.L.uv = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (c[a].apply(this, arguments)) {
        return !0;
      }
    }
    return !1;
  };
};
l.L.bm = function(a) {
  return function() {
    return !a.apply(this, arguments);
  };
};
l.L.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
l.L.ei = !0;
l.L.Ys = function(a) {
  var c = !1, d;
  return function() {
    if (!l.L.ei) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
l.L.tv = function(a) {
  var c = a;
  return function() {
    if (c) {
      var a = c;
      c = null;
      a();
    }
  };
};
l.L.Ct = function(a, c, d) {
  d && (a = l.bind(a, d));
  var e = null;
  return function() {
    l.global.clearTimeout(e);
    e = l.global.setTimeout(a, c);
  };
};
l.L.iw = function(a, c, d) {
  d && (a = l.bind(a, d));
  var e = null, f = !1, g = function() {
    e = null;
    f && (f = !1, e = l.global.setTimeout(g, c), a());
  };
  return function() {
    e ? f = !0 : (e = l.global.setTimeout(g, c), a());
  };
};
l.H = {};
l.H.Av = function(a) {
  return Math.floor(Math.random() * a);
};
l.H.qw = function(a, c) {
  return a + Math.random() * (c - a);
};
l.H.it = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
l.H.vh = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
l.H.Yu = function(a, c, d) {
  return a + d * (c - a);
};
l.H.lv = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
l.H.Ye = function(a) {
  return l.H.vh(a, 360);
};
l.H.bw = function(a) {
  return l.H.vh(a, 2 * Math.PI);
};
l.H.Wh = function(a) {
  return a * Math.PI / 180;
};
l.H.Zm = function(a) {
  return 180 * a / Math.PI;
};
l.H.Hs = function(a, c) {
  return c * Math.cos(l.H.Wh(a));
};
l.H.Is = function(a, c) {
  return c * Math.sin(l.H.Wh(a));
};
l.H.Fs = function(a, c, d, e) {
  return l.H.Ye(l.H.Zm(Math.atan2(e - c, d - a)));
};
l.H.Gs = function(a, c) {
  var d = l.H.Ye(c) - l.H.Ye(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
l.H.sign = Math.sign || function(a) {
  return 0 < a ? 1 : 0 > a ? -1 : a;
};
l.H.ev = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, g = c.length, h = [], k = 0;k < f + 1;k++) {
    h[k] = [], h[k][0] = 0;
  }
  for (var n = 0;n < g + 1;n++) {
    h[0][n] = 0;
  }
  for (k = 1;k <= f;k++) {
    for (n = 1;n <= g;n++) {
      d(a[k - 1], c[n - 1]) ? h[k][n] = h[k - 1][n - 1] + 1 : h[k][n] = Math.max(h[k - 1][n], h[k][n - 1]);
    }
  }
  for (var t = [], k = f, n = g;0 < k && 0 < n;) {
    d(a[k - 1], c[n - 1]) ? (t.unshift(e(k - 1, n - 1)), k--, n--) : h[k - 1][n] > h[k][n - 1] ? k-- : n--;
  }
  return t;
};
l.H.Uh = function(a) {
  return l.c.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
l.H.Ij = function(a) {
  return l.H.Uh.apply(null, arguments) / arguments.length;
};
l.H.wm = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = l.H.Ij.apply(null, arguments);
  return l.H.Uh.apply(null, l.c.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
l.H.cw = function(a) {
  return Math.sqrt(l.H.wm.apply(null, arguments));
};
l.H.Fu = function(a) {
  return isFinite(a) && 0 == a % 1;
};
l.H.Du = function(a) {
  return isFinite(a) && !isNaN(a);
};
l.H.Ku = function(a) {
  return 0 == a && 0 > 1 / a;
};
l.H.cv = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
l.H.Kv = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
l.H.Jv = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
l.j = {};
l.j.ea = "StopIteration" in l.global ? l.global.StopIteration : {message:"StopIteration", stack:""};
l.j.Iterator = function() {
};
l.j.Iterator.prototype.next = function() {
  throw l.j.ea;
};
l.j.Iterator.prototype.fc = function() {
  return this;
};
l.j.X = function(a) {
  if (a instanceof l.j.Iterator) {
    return a;
  }
  if ("function" == typeof a.fc) {
    return a.fc(!1);
  }
  if (l.W(a)) {
    var c = 0, d = new l.j.Iterator;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw l.j.ea;
        }
        if (c in a) {
          return a[c++];
        }
        c++;
      }
    };
    return d;
  }
  throw Error("Not implemented");
};
l.j.forEach = function(a, c, d) {
  if (l.W(a)) {
    try {
      l.c.forEach(a, c, d);
    } catch (e) {
      if (e !== l.j.ea) {
        throw e;
      }
    }
  } else {
    a = l.j.X(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== l.j.ea) {
        throw f;
      }
    }
  }
};
l.j.filter = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (c.call(d, a, void 0, e)) {
        return a;
      }
    }
  };
  return a;
};
l.j.Qt = function(a, c, d) {
  return l.j.filter(a, l.L.bm(c), d);
};
l.j.od = function(a, c, d) {
  var e = 0, f = a, g = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == g) {
    throw Error("Range step argument must not be zero");
  }
  var h = new l.j.Iterator;
  h.next = function() {
    if (0 < g && e >= f || 0 > g && e <= f) {
      throw l.j.ea;
    }
    var a = e;
    e += g;
    return a;
  };
  return h;
};
l.j.join = function(a, c) {
  return l.j.kb(a).join(c);
};
l.j.map = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  a.next = function() {
    var a = e.next();
    return c.call(d, a, void 0, e);
  };
  return a;
};
l.j.reduce = function(a, c, d, e) {
  var f = d;
  l.j.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
l.j.some = function(a, c, d) {
  a = l.j.X(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return !0;
      }
    }
  } catch (e) {
    if (e !== l.j.ea) {
      throw e;
    }
  }
  return !1;
};
l.j.every = function(a, c, d) {
  a = l.j.X(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return !1;
      }
    }
  } catch (e) {
    if (e !== l.j.ea) {
      throw e;
    }
  }
  return !0;
};
l.j.gt = function(a) {
  return l.j.Tj(arguments);
};
l.j.Tj = function(a) {
  var c = l.j.X(a);
  a = new l.j.Iterator;
  var d = null;
  a.next = function() {
    for (;;) {
      if (null == d) {
        var a = c.next();
        d = l.j.X(a);
      }
      try {
        return d.next();
      } catch (f) {
        if (f !== l.j.ea) {
          throw f;
        }
        d = null;
      }
    }
  };
  return a;
};
l.j.Gt = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  var f = !0;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (!f || !c.call(d, a, void 0, e)) {
        return f = !1, a;
      }
    }
  };
  return a;
};
l.j.hw = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  a.next = function() {
    var a = e.next();
    if (c.call(d, a, void 0, e)) {
      return a;
    }
    throw l.j.ea;
  };
  return a;
};
l.j.kb = function(a) {
  if (l.W(a)) {
    return l.c.kb(a);
  }
  a = l.j.X(a);
  var c = [];
  l.j.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
l.j.pa = function(a, c, d) {
  a = l.j.on({}, a, c);
  var e = d || l.c.ng;
  return l.j.every(a, function(a) {
    return e(a[0], a[1]);
  });
};
l.j.Zl = function(a, c) {
  try {
    return l.j.X(a).next();
  } catch (d) {
    if (d != l.j.ea) {
      throw d;
    }
    return c;
  }
};
l.j.product = function(a) {
  if (l.c.some(arguments, function(a) {
    return !a.length;
  }) || !arguments.length) {
    return new l.j.Iterator;
  }
  var c = new l.j.Iterator, d = arguments, e = l.c.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = l.c.map(e, function(a, c) {
        return d[c][a];
      }), c = e.length - 1;0 <= c;c--) {
        if (e[c] < d[c].length - 1) {
          e[c]++;
          break;
        }
        if (0 == c) {
          e = null;
          break;
        }
        e[c] = 0;
      }
      return a;
    }
    throw l.j.ea;
  };
  return c;
};
l.j.Bt = function(a) {
  var c = l.j.X(a), d = [], e = 0;
  a = new l.j.Iterator;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (h) {
        if (h != l.j.ea || l.c.wa(d)) {
          throw h;
        }
        f = !0;
      }
    }
    a = d[e];
    e = (e + 1) % d.length;
    return a;
  };
  return a;
};
l.j.count = function(a, c) {
  var d = a || 0, e = l.ha(c) ? c : 1, f = new l.j.Iterator;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
l.j.repeat = function(a) {
  var c = new l.j.Iterator;
  c.next = l.L.ic(a);
  return c;
};
l.j.Cs = function(a) {
  var c = l.j.X(a), d = 0;
  a = new l.j.Iterator;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
l.j.bi = function(a) {
  var c = arguments, d = new l.j.Iterator;
  if (0 < c.length) {
    var e = l.c.map(c, l.j.X);
    d.next = function() {
      return l.c.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
l.j.on = function(a, c) {
  var d = l.c.slice(arguments, 1), e = new l.j.Iterator;
  if (0 < d.length) {
    var f = l.c.map(d, l.j.X);
    e.next = function() {
      var c = !1, d = l.c.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== l.j.ea) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw l.j.ea;
      }
      return d;
    };
  }
  return e;
};
l.j.rt = function(a, c) {
  var d = l.j.X(c);
  return l.j.filter(a, function() {
    return !!d.next();
  });
};
l.j.Kc = function(a, c) {
  this.iterator = l.j.X(a);
  this.nh = c || l.L.identity;
};
l.wb(l.j.Kc, l.j.Iterator);
l.j.Kc.prototype.next = function() {
  for (;this.mc == this.Vh;) {
    this.Rc = this.iterator.next(), this.mc = this.nh(this.Rc);
  }
  this.Vh = this.mc;
  return [this.mc, this.Wk(this.Vh)];
};
l.j.Kc.prototype.Wk = function(a) {
  for (var c = [];this.mc == a;) {
    c.push(this.Rc);
    try {
      this.Rc = this.iterator.next();
    } catch (d) {
      if (d !== l.j.ea) {
        throw d;
      }
      break;
    }
    this.mc = this.nh(this.Rc);
  }
  return c;
};
l.j.lu = function(a, c) {
  return new l.j.Kc(a, c);
};
l.j.dw = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  a.next = function() {
    var a = l.j.kb(e.next());
    return c.apply(d, l.c.concat(a, void 0, e));
  };
  return a;
};
l.j.tee = function(a, c) {
  var d = l.j.X(a), e = l.c.map(l.c.od(l.yc(c) ? c : 2), function() {
    return [];
  }), f = function() {
    var a = d.next();
    l.c.forEach(e, function(c) {
      c.push(a);
    });
  };
  return l.c.map(e, function(a) {
    var c = new l.j.Iterator;
    c.next = function() {
      l.c.wa(a) && f();
      return a.shift();
    };
    return c;
  });
};
l.j.Mt = function(a, c) {
  return l.j.bi(l.j.count(c), a);
};
l.j.limit = function(a, c) {
  var d = l.j.X(a), e = new l.j.Iterator, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw l.j.ea;
  };
  return e;
};
l.j.Wj = function(a, c) {
  for (var d = l.j.X(a);0 < c--;) {
    l.j.Zl(d, null);
  }
  return d;
};
l.j.slice = function(a, c, d) {
  a = l.j.Wj(a, c);
  l.yc(d) && (a = l.j.limit(a, d - c));
  return a;
};
l.j.Yk = function(a) {
  var c = [];
  l.c.lm(a, c);
  return a.length != c.length;
};
l.j.jm = function(a, c) {
  var d = l.j.kb(a), d = l.c.repeat(d, l.yc(c) ? c : d.length), d = l.j.product.apply(void 0, d);
  return l.j.filter(d, function(a) {
    return !l.j.Yk(a);
  });
};
l.j.nt = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.j.kb(a), f = l.j.od(e.length), f = l.j.jm(f, c), g = l.j.filter(f, function(a) {
    return l.c.jh(a);
  }), f = new l.j.Iterator;
  f.next = function() {
    return l.c.map(g.next(), d);
  };
  return f;
};
l.j.ot = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.j.kb(a), f = l.c.od(e.length), f = l.c.repeat(f, c), f = l.j.product.apply(void 0, f), g = l.j.filter(f, function(a) {
    return l.c.jh(a);
  }), f = new l.j.Iterator;
  f.next = function() {
    return l.c.map(g.next(), d);
  };
  return f;
};
l.A.Map = function(a, c) {
  this.N = {};
  this.R = [];
  this.Fc = this.Sa = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.addAll(a);
  }
};
b = l.A.Map.prototype;
b.va = function() {
  return this.Sa;
};
b.V = function() {
  this.Ib();
  for (var a = [], c = 0;c < this.R.length;c++) {
    a.push(this.N[this.R[c]]);
  }
  return a;
};
b.ma = function() {
  this.Ib();
  return this.R.concat();
};
b.Jb = function(a) {
  return l.A.Map.vb(this.N, a);
};
b.jc = function(a) {
  for (var c = 0;c < this.R.length;c++) {
    var d = this.R[c];
    if (l.A.Map.vb(this.N, d) && this.N[d] == a) {
      return !0;
    }
  }
  return !1;
};
b.pa = function(a, c) {
  if (this === a) {
    return !0;
  }
  if (this.Sa != a.va()) {
    return !1;
  }
  var d = c || l.A.Map.ck;
  this.Ib();
  for (var e, f = 0;e = this.R[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return !1;
    }
  }
  return !0;
};
l.A.Map.ck = function(a, c) {
  return a === c;
};
b = l.A.Map.prototype;
b.wa = function() {
  return 0 == this.Sa;
};
b.clear = function() {
  this.N = {};
  this.Fc = this.Sa = this.R.length = 0;
};
b.remove = function(a) {
  return l.A.Map.vb(this.N, a) ? (delete this.N[a], this.Sa--, this.Fc++, this.R.length > 2 * this.Sa && this.Ib(), !0) : !1;
};
b.Ib = function() {
  if (this.Sa != this.R.length) {
    for (var a = 0, c = 0;a < this.R.length;) {
      var d = this.R[a];
      l.A.Map.vb(this.N, d) && (this.R[c++] = d);
      a++;
    }
    this.R.length = c;
  }
  if (this.Sa != this.R.length) {
    for (var e = {}, c = a = 0;a < this.R.length;) {
      d = this.R[a], l.A.Map.vb(e, d) || (this.R[c++] = d, e[d] = 1), a++;
    }
    this.R.length = c;
  }
};
b.get = function(a, c) {
  return l.A.Map.vb(this.N, a) ? this.N[a] : c;
};
b.set = function(a, c) {
  l.A.Map.vb(this.N, a) || (this.Sa++, this.R.push(a), this.Fc++);
  this.N[a] = c;
};
b.addAll = function(a) {
  var c;
  a instanceof l.A.Map ? (c = a.ma(), a = a.V()) : (c = l.object.ma(a), a = l.object.V(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.ma(), e = 0;e < d.length;e++) {
    var f = d[e], g = this.get(f);
    a.call(c, g, f, this);
  }
};
b.clone = function() {
  return new l.A.Map(this);
};
b.bn = function() {
  for (var a = new l.A.Map, c = 0;c < this.R.length;c++) {
    var d = this.R[c];
    a.set(this.N[d], d);
  }
  return a;
};
b.an = function() {
  this.Ib();
  for (var a = {}, c = 0;c < this.R.length;c++) {
    var d = this.R[c];
    a[d] = this.N[d];
  }
  return a;
};
b.fc = function(a) {
  this.Ib();
  var c = 0, d = this.Fc, e = this, f = new l.j.Iterator;
  f.next = function() {
    if (d != e.Fc) {
      throw Error("The map has changed since the iterator was created");
    }
    if (c >= e.R.length) {
      throw l.j.ea;
    }
    var f = e.R[c++];
    return a ? f : e.N[f];
  };
  return f;
};
l.A.Map.vb = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
l.A.va = function(a) {
  return "function" == typeof a.va ? a.va() : l.W(a) || l.G(a) ? a.length : l.object.va(a);
};
l.A.V = function(a) {
  if ("function" == typeof a.V) {
    return a.V();
  }
  if (l.G(a)) {
    return a.split("");
  }
  if (l.W(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return l.object.V(a);
};
l.A.ma = function(a) {
  if ("function" == typeof a.ma) {
    return a.ma();
  }
  if ("function" != typeof a.V) {
    if (l.W(a) || l.G(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return l.object.ma(a);
  }
};
l.A.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.jc ? a.jc(c) : l.W(a) || l.G(a) ? l.c.contains(a, c) : l.object.jc(a, c);
};
l.A.wa = function(a) {
  return "function" == typeof a.wa ? a.wa() : l.W(a) || l.G(a) ? l.c.wa(a) : l.object.wa(a);
};
l.A.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : l.W(a) ? l.c.clear(a) : l.object.clear(a);
};
l.A.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (l.W(a) || l.G(a)) {
      l.c.forEach(a, c, d);
    } else {
      for (var e = l.A.ma(a), f = l.A.V(a), g = f.length, h = 0;h < g;h++) {
        c.call(d, f[h], e && e[h], a);
      }
    }
  }
};
l.A.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (l.W(a) || l.G(a)) {
    return l.c.filter(a, c, d);
  }
  var e, f = l.A.ma(a), g = l.A.V(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      c.call(d, g[k], f[k], a) && (e[f[k]] = g[k]);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      c.call(d, g[k], void 0, a) && e.push(g[k]);
    }
  }
  return e;
};
l.A.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (l.W(a) || l.G(a)) {
    return l.c.map(a, c, d);
  }
  var e, f = l.A.ma(a), g = l.A.V(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      e[f[k]] = c.call(d, g[k], f[k], a);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      e[k] = c.call(d, g[k], void 0, a);
    }
  }
  return e;
};
l.A.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (l.W(a) || l.G(a)) {
    return l.c.some(a, c, d);
  }
  for (var e = l.A.ma(a), f = l.A.V(a), g = f.length, h = 0;h < g;h++) {
    if (c.call(d, f[h], e && e[h], a)) {
      return !0;
    }
  }
  return !1;
};
l.A.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (l.W(a) || l.G(a)) {
    return l.c.every(a, c, d);
  }
  for (var e = l.A.ma(a), f = l.A.V(a), g = f.length, h = 0;h < g;h++) {
    if (!c.call(d, f[h], e && e[h], a)) {
      return !1;
    }
  }
  return !0;
};
l.A.Set = function(a) {
  this.N = new l.A.Map;
  a && this.addAll(a);
};
l.A.Set.pe = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + l.tc(a) : c.substr(0, 1) + a;
};
b = l.A.Set.prototype;
b.va = function() {
  return this.N.va();
};
b.add = function(a) {
  this.N.set(l.A.Set.pe(a), a);
};
b.addAll = function(a) {
  a = l.A.V(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = l.A.V(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.N.remove(l.A.Set.pe(a));
};
b.clear = function() {
  this.N.clear();
};
b.wa = function() {
  return this.N.wa();
};
b.contains = function(a) {
  return this.N.Jb(l.A.Set.pe(a));
};
b.V = function() {
  return this.N.V();
};
b.clone = function() {
  return new l.A.Set(this);
};
b.pa = function(a) {
  return this.va() == l.A.va(a) && this.Bl(a);
};
b.Bl = function(a) {
  var c = l.A.va(a);
  if (this.va() > c) {
    return !1;
  }
  !(a instanceof l.A.Set) && 5 < c && (a = new l.A.Set(a));
  return l.A.every(this, function(c) {
    return l.A.contains(a, c);
  });
};
b.fc = function() {
  return this.N.fc(!1);
};
l.h = {};
l.h.userAgent = {};
l.h.userAgent.C = {};
l.h.userAgent.C.Gg = function() {
  var a = l.h.userAgent.C.Lk();
  return a && (a = a.userAgent) ? a : "";
};
l.h.userAgent.C.Lk = function() {
  return l.global.navigator;
};
l.h.userAgent.C.Zh = l.h.userAgent.C.Gg();
l.h.userAgent.C.Wv = function(a) {
  l.h.userAgent.C.Zh = a || l.h.userAgent.C.Gg();
};
l.h.userAgent.C.Ob = function() {
  return l.h.userAgent.C.Zh;
};
l.h.userAgent.C.K = function(a) {
  return l.f.contains(l.h.userAgent.C.Ob(), a);
};
l.h.userAgent.C.Wl = function(a) {
  return l.f.Sj(l.h.userAgent.C.Ob(), a);
};
l.h.userAgent.C.tg = function(a) {
  for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
l.h.userAgent.browser = {};
l.h.userAgent.browser.Ke = function() {
  return l.h.userAgent.C.K("Opera") || l.h.userAgent.C.K("OPR");
};
l.h.userAgent.browser.Ul = function() {
  return l.h.userAgent.C.K("Trident") || l.h.userAgent.C.K("MSIE");
};
l.h.userAgent.browser.Je = function() {
  return l.h.userAgent.C.K("Edge");
};
l.h.userAgent.browser.Tl = function() {
  return l.h.userAgent.C.K("Firefox");
};
l.h.userAgent.browser.sh = function() {
  return l.h.userAgent.C.K("Safari") && !(l.h.userAgent.browser.He() || l.h.userAgent.browser.Ie() || l.h.userAgent.browser.Ke() || l.h.userAgent.browser.Je() || l.h.userAgent.browser.ih() || l.h.userAgent.C.K("Android"));
};
l.h.userAgent.browser.Ie = function() {
  return l.h.userAgent.C.K("Coast");
};
l.h.userAgent.browser.Vl = function() {
  return (l.h.userAgent.C.K("iPad") || l.h.userAgent.C.K("iPhone")) && !l.h.userAgent.browser.sh() && !l.h.userAgent.browser.He() && !l.h.userAgent.browser.Ie() && l.h.userAgent.C.K("AppleWebKit");
};
l.h.userAgent.browser.He = function() {
  return (l.h.userAgent.C.K("Chrome") || l.h.userAgent.C.K("CriOS")) && !l.h.userAgent.browser.Ke() && !l.h.userAgent.browser.Je();
};
l.h.userAgent.browser.Sl = function() {
  return l.h.userAgent.C.K("Android") && !(l.h.userAgent.browser.Wg() || l.h.userAgent.browser.nl() || l.h.userAgent.browser.Be() || l.h.userAgent.browser.ih());
};
l.h.userAgent.browser.Be = l.h.userAgent.browser.Ke;
l.h.userAgent.browser.bh = l.h.userAgent.browser.Ul;
l.h.userAgent.browser.Qb = l.h.userAgent.browser.Je;
l.h.userAgent.browser.nl = l.h.userAgent.browser.Tl;
l.h.userAgent.browser.Su = l.h.userAgent.browser.sh;
l.h.userAgent.browser.yu = l.h.userAgent.browser.Ie;
l.h.userAgent.browser.Gu = l.h.userAgent.browser.Vl;
l.h.userAgent.browser.Wg = l.h.userAgent.browser.He;
l.h.userAgent.browser.wu = l.h.userAgent.browser.Sl;
l.h.userAgent.browser.ih = function() {
  return l.h.userAgent.C.K("Silk");
};
l.h.userAgent.browser.uc = function() {
  function a(a) {
    a = l.c.find(a, e);
    return d[a] || "";
  }
  var c = l.h.userAgent.C.Ob();
  if (l.h.userAgent.browser.bh()) {
    return l.h.userAgent.browser.Gk(c);
  }
  var c = l.h.userAgent.C.tg(c), d = {};
  l.c.forEach(c, function(a) {
    d[a[0]] = a[1];
  });
  var e = l.Fh(l.object.Jb, d);
  return l.h.userAgent.browser.Be() ? a(["Version", "Opera", "OPR"]) : l.h.userAgent.browser.Qb() ? a(["Edge"]) : l.h.userAgent.browser.Wg() ? a(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || "";
};
l.h.userAgent.browser.ra = function(a) {
  return 0 <= l.f.hc(l.h.userAgent.browser.uc(), a);
};
l.h.userAgent.browser.Gk = function(a) {
  var c = /rv: *([\d\.]*)/.exec(a);
  if (c && c[1]) {
    return c[1];
  }
  var c = "", d = /MSIE +([\d\.]+)/.exec(a);
  if (d && d[1]) {
    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == d[1]) {
      if (a && a[1]) {
        switch(a[1]) {
          case "4.0":
            c = "8.0";
            break;
          case "5.0":
            c = "9.0";
            break;
          case "6.0":
            c = "10.0";
            break;
          case "7.0":
            c = "11.0";
        }
      } else {
        c = "7.0";
      }
    } else {
      c = d[1];
    }
  }
  return c;
};
l.h.userAgent.Z = {};
l.h.userAgent.Z.Ou = function() {
  return l.h.userAgent.C.K("Presto");
};
l.h.userAgent.Z.Cl = function() {
  return l.h.userAgent.C.K("Trident") || l.h.userAgent.C.K("MSIE");
};
l.h.userAgent.Z.Qb = function() {
  return l.h.userAgent.C.K("Edge");
};
l.h.userAgent.Z.lh = function() {
  return l.h.userAgent.C.Wl("WebKit") && !l.h.userAgent.Z.Qb();
};
l.h.userAgent.Z.ol = function() {
  return l.h.userAgent.C.K("Gecko") && !l.h.userAgent.Z.lh() && !l.h.userAgent.Z.Cl() && !l.h.userAgent.Z.Qb();
};
l.h.userAgent.Z.uc = function() {
  var a = l.h.userAgent.C.Ob();
  if (a) {
    var a = l.h.userAgent.C.tg(a), c = l.h.userAgent.Z.Dk(a);
    if (c) {
      return "Gecko" == c[0] ? l.h.userAgent.Z.Tk(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
l.h.userAgent.Z.Dk = function(a) {
  if (!l.h.userAgent.Z.Qb()) {
    return a[1];
  }
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    if ("Edge" == d[0]) {
      return d;
    }
  }
};
l.h.userAgent.Z.ra = function(a) {
  return 0 <= l.f.hc(l.h.userAgent.Z.uc(), a);
};
l.h.userAgent.Z.Tk = function(a, c) {
  var d = l.c.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
l.h.userAgent.platform = {};
l.h.userAgent.platform.Ug = function() {
  return l.h.userAgent.C.K("Android");
};
l.h.userAgent.platform.rl = function() {
  return l.h.userAgent.C.K("iPod");
};
l.h.userAgent.platform.eh = function() {
  return l.h.userAgent.C.K("iPhone") && !l.h.userAgent.C.K("iPod") && !l.h.userAgent.C.K("iPad");
};
l.h.userAgent.platform.dh = function() {
  return l.h.userAgent.C.K("iPad");
};
l.h.userAgent.platform.ql = function() {
  return l.h.userAgent.platform.eh() || l.h.userAgent.platform.dh() || l.h.userAgent.platform.rl();
};
l.h.userAgent.platform.fh = function() {
  return l.h.userAgent.C.K("Macintosh");
};
l.h.userAgent.platform.tl = function() {
  return l.h.userAgent.C.K("Linux");
};
l.h.userAgent.platform.mh = function() {
  return l.h.userAgent.C.K("Windows");
};
l.h.userAgent.platform.Xg = function() {
  return l.h.userAgent.C.K("CrOS");
};
l.h.userAgent.platform.uc = function() {
  var a = l.h.userAgent.C.Ob(), c = "";
  l.h.userAgent.platform.mh() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (a = c.exec(a)) ? a[1] : "0.0") : l.h.userAgent.platform.ql() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (a = c.exec(a)) && a[1].replace(/_/g, ".")) : l.h.userAgent.platform.fh() ? (c = /Mac OS X ([0-9_.]+)/, c = (a = c.exec(a)) ? a[1].replace(/_/g, ".") : "10") : l.h.userAgent.platform.Ug() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (a = c.exec(a)) && a[1]) : l.h.userAgent.platform.Xg() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, 
  c = (a = c.exec(a)) && a[1]);
  return c || "";
};
l.h.userAgent.platform.ra = function(a) {
  return 0 <= l.f.hc(l.h.userAgent.platform.uc(), a);
};
l.userAgent = {};
l.userAgent.ef = !1;
l.userAgent.cf = !1;
l.userAgent.df = !1;
l.userAgent.lf = !1;
l.userAgent.vd = !1;
l.userAgent.kf = !1;
l.userAgent.di = !1;
l.userAgent.$b = l.userAgent.ef || l.userAgent.cf || l.userAgent.df || l.userAgent.vd || l.userAgent.lf || l.userAgent.kf;
l.userAgent.Sk = function() {
  return l.h.userAgent.C.Ob();
};
l.userAgent.Hg = function() {
  return l.global.navigator || null;
};
l.userAgent.Md = l.userAgent.$b ? l.userAgent.kf : l.h.userAgent.browser.Be();
l.userAgent.Aa = l.userAgent.$b ? l.userAgent.ef : l.h.userAgent.browser.bh();
l.userAgent.qf = l.userAgent.$b ? l.userAgent.cf : l.h.userAgent.Z.Qb();
l.userAgent.Xo = l.userAgent.qf || l.userAgent.Aa;
l.userAgent.Jc = l.userAgent.$b ? l.userAgent.df : l.h.userAgent.Z.ol();
l.userAgent.Ra = l.userAgent.$b ? l.userAgent.lf || l.userAgent.vd : l.h.userAgent.Z.lh();
l.userAgent.xl = function() {
  return l.userAgent.Ra && l.h.userAgent.C.K("Mobile");
};
l.userAgent.sq = l.userAgent.vd || l.userAgent.xl();
l.userAgent.Gr = l.userAgent.Ra;
l.userAgent.dk = function() {
  var a = l.userAgent.Hg();
  return a && a.platform || "";
};
l.userAgent.jr = l.userAgent.dk();
l.userAgent.jf = !1;
l.userAgent.mf = !1;
l.userAgent.hf = !1;
l.userAgent.nf = !1;
l.userAgent.bf = !1;
l.userAgent.gf = !1;
l.userAgent.ff = !1;
l.userAgent.nb = l.userAgent.jf || l.userAgent.mf || l.userAgent.hf || l.userAgent.nf || l.userAgent.bf || l.userAgent.gf || l.userAgent.ff;
l.userAgent.iq = l.userAgent.nb ? l.userAgent.jf : l.h.userAgent.platform.fh();
l.userAgent.zs = l.userAgent.nb ? l.userAgent.mf : l.h.userAgent.platform.mh();
l.userAgent.sl = function() {
  return l.h.userAgent.platform.tl() || l.h.userAgent.platform.Xg();
};
l.userAgent.$p = l.userAgent.nb ? l.userAgent.hf : l.userAgent.sl();
l.userAgent.Fl = function() {
  var a = l.userAgent.Hg();
  return !!a && l.f.contains(a.appVersion || "", "X11");
};
l.userAgent.As = l.userAgent.nb ? l.userAgent.nf : l.userAgent.Fl();
l.userAgent.ANDROID = l.userAgent.nb ? l.userAgent.bf : l.h.userAgent.platform.Ug();
l.userAgent.Qp = l.userAgent.nb ? l.userAgent.gf : l.h.userAgent.platform.eh();
l.userAgent.Pp = l.userAgent.nb ? l.userAgent.ff : l.h.userAgent.platform.dh();
l.userAgent.ek = function() {
  if (l.userAgent.Md && l.global.opera) {
    var a = l.global.opera.version;
    return l.Ma(a) ? a() : a;
  }
  var a = "", c = l.userAgent.Uk();
  c && (a = c ? c[1] : "");
  return l.userAgent.Aa && (c = l.userAgent.Bg(), c > parseFloat(a)) ? String(c) : a;
};
l.userAgent.Uk = function() {
  var a = l.userAgent.Sk();
  if (l.userAgent.Jc) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (l.userAgent.qf) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (l.userAgent.Aa) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (l.userAgent.Ra) {
    return /WebKit\/(\S+)/.exec(a);
  }
};
l.userAgent.Bg = function() {
  var a = l.global.document;
  return a ? a.documentMode : void 0;
};
l.userAgent.VERSION = l.userAgent.ek();
l.userAgent.compare = function(a, c) {
  return l.f.hc(a, c);
};
l.userAgent.kh = {};
l.userAgent.ra = function(a) {
  return l.userAgent.di || l.userAgent.kh[a] || (l.userAgent.kh[a] = 0 <= l.f.hc(l.userAgent.VERSION, a));
};
l.userAgent.Wu = l.userAgent.ra;
l.userAgent.ye = function(a) {
  return l.userAgent.li >= a;
};
l.userAgent.Au = l.userAgent.ye;
var m = l.global.document;
l.userAgent.li = m && l.userAgent.Aa ? l.userAgent.Bg() || ("CSS1Compat" == m.compatMode ? parseInt(l.userAgent.VERSION, 10) : 5) : void 0;
l.debug.Ba = l.na;
l.debug.ft = function(a, c, d) {
  d = d || l.global;
  var e = d.onerror, f = !!c;
  l.userAgent.Ra && !l.userAgent.ra("535.3") && (f = !f);
  d.onerror = function(c, d, k, n, t) {
    e && e(c, d, k, n, t);
    a({message:c, fileName:d, Hl:k, kt:n, error:t});
    return f;
  };
};
l.debug.qk = function(a, c) {
  if ("undefined" == typeof a) {
    return "undefined";
  }
  if (null == a) {
    return "NULL";
  }
  var d = [], e;
  for (e in a) {
    if (c || !l.Ma(a[e])) {
      var f = e + " = ";
      try {
        f += a[e];
      } catch (g) {
        f += "*** " + g + " ***";
      }
      d.push(f);
    }
  }
  return d.join("\n");
};
l.debug.Dt = function(a, c) {
  var d = [], e = function(a, g, h) {
    var k = g + "  ";
    h = new l.A.Set(h);
    try {
      if (l.ha(a)) {
        if (l.gh(a)) {
          d.push("NULL");
        } else {
          if (l.G(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + g) + '"');
          } else {
            if (l.Ma(a)) {
              d.push(String(a).replace(/\n/g, "\n" + g));
            } else {
              if (l.Rb(a)) {
                if (h.contains(a)) {
                  d.push("*** reference loop detected ***");
                } else {
                  h.add(a);
                  d.push("{");
                  for (var n in a) {
                    if (c || !l.Ma(a[n])) {
                      d.push("\n"), d.push(k), d.push(n + " = "), e(a[n], k, h);
                    }
                  }
                  d.push("\n" + g + "}");
                }
              } else {
                d.push(a);
              }
            }
          }
        }
      } else {
        d.push("undefined");
      }
    } catch (t) {
      d.push("*** " + t + " ***");
    }
  };
  e(a, "", new l.A.Set);
  return d.join("");
};
l.debug.rk = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    l.isArray(a[d]) ? c.push(l.debug.rk(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
l.debug.Pt = function(a, c) {
  var d = l.debug.sk(a, c);
  return l.b.s.P(d);
};
l.debug.sk = function(a, c) {
  try {
    var d = l.debug.am(a), e = l.debug.$j(d.fileName);
    return l.b.s.concat(l.b.s.ue("Message: " + d.message + "\nUrl: "), l.b.s.create("a", {href:e, target:"_new"}, d.fileName), l.b.s.ue("\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + d.stack + "-> [end]\n\nJS stack traversal:\n" + l.debug.te(c) + "-> "));
  } catch (f) {
    return l.b.s.ue("Exception trying to expose exception! You win, we lose. " + f);
  }
};
l.debug.$j = function(a) {
  l.cd(a) || (a = "");
  if (!/^https?:\/\//i.test(a)) {
    return l.b.J.qc(l.f.S.he("sanitizedviewsrc"));
  }
  a = l.b.J.Oh(a);
  return l.b.Eb.vm(l.f.S.he("view-source scheme plus HTTP/HTTPS URL"), "view-source:" + l.b.J.P(a));
};
l.debug.am = function(a) {
  var c = l.Ig("window.location.href");
  if (l.G(a)) {
    return {message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.Hl || "Not available";
  } catch (g) {
    d = "Not available", f = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || l.global.$googDebugFname || c;
  } catch (h) {
    e = "Not available", f = !0;
  }
  return !f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
l.debug.pg = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, l.debug.pg)) : d = a;
  d.stack || (d.stack = l.debug.te(l.debug.pg));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
l.debug.Pk = function(a) {
  if (l.Sd) {
    var c = l.debug.Fg(l.debug.Pk);
    if (c) {
      return c;
    }
  }
  for (var c = [], d = arguments.callee.caller, e = 0;d && (!a || e < a);) {
    c.push(l.debug.getFunctionName(d));
    c.push("()\n");
    try {
      d = d.caller;
    } catch (f) {
      c.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (e >= l.debug.Hf) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
l.debug.Hf = 50;
l.debug.Fg = function(a) {
  var c = Error();
  if (Error.captureStackTrace) {
    return Error.captureStackTrace(c, a), String(c.stack);
  }
  try {
    throw c;
  } catch (d) {
    c = d;
  }
  return (a = c.stack) ? String(a) : null;
};
l.debug.te = function(a) {
  var c;
  l.Sd && (c = l.debug.Fg(a || l.debug.te));
  c || (c = l.debug.Lg(a || arguments.callee.caller, []));
  return c;
};
l.debug.Lg = function(a, c) {
  var d = [];
  if (l.c.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < l.debug.Hf) {
      d.push(l.debug.getFunctionName(a) + "(");
      for (var e = a.arguments, f = 0;e && f < e.length;f++) {
        0 < f && d.push(", ");
        var g;
        g = e[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = l.debug.getFunctionName(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        d.push(g);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(l.debug.Lg(a.caller, c));
      } catch (h) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
l.debug.Tv = function(a) {
  l.debug.xg = a;
};
l.debug.getFunctionName = function(a) {
  if (l.debug.Mb[a]) {
    return l.debug.Mb[a];
  }
  if (l.debug.xg) {
    var c = l.debug.xg(a);
    if (c) {
      return l.debug.Mb[a] = c;
    }
  }
  a = String(a);
  l.debug.Mb[a] || (c = /function ([^\(]+)/.exec(a), l.debug.Mb[a] = c ? c[1] : "[Anonymous]");
  return l.debug.Mb[a];
};
l.debug.fv = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
l.debug.Iv = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
l.debug.Mb = {};
l.debug.ta = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
l.debug.ta.prototype.sg = null;
l.debug.ta.ni = !0;
l.debug.ta.$l = 0;
l.debug.ta.prototype.reset = function(a, c, d, e, f) {
  l.debug.ta.ni && ("number" == typeof f || l.debug.ta.$l++);
  e || l.now();
  this.De = a;
  this.Yl = c;
  delete this.sg;
};
l.debug.ta.prototype.Pm = function(a) {
  this.sg = a;
};
l.debug.ta.prototype.getMessage = function() {
  return this.Yl;
};
l.debug.ja = function() {
  this.clear();
};
l.debug.ja.oe = function() {
  l.debug.ja.wc || (l.debug.ja.wc = new l.debug.ja);
  return l.debug.ja.wc;
};
l.debug.ja.Ic = 0;
l.debug.ja.prototype.Dj = function(a, c, d) {
  var e = (this.lg + 1) % l.debug.ja.Ic;
  this.lg = e;
  if (this.ah) {
    return e = this.bg[e], e.reset(a, c, d), e;
  }
  this.ah = e == l.debug.ja.Ic - 1;
  return this.bg[e] = new l.debug.ta(a, c, d);
};
l.debug.ja.ll = function() {
  return 0 < l.debug.ja.Ic;
};
l.debug.ja.prototype.clear = function() {
  this.bg = Array(l.debug.ja.Ic);
  this.lg = -1;
  this.ah = !1;
};
l.debug.o = function(a) {
  this.hb = a;
  this.Pb = this.Xd = this.De = this.Oe = null;
};
l.debug.o.Od = "";
l.debug.o.ac = !0;
l.debug.o.ac || (l.debug.o.Te = []);
l.debug.o.B = function(a, c) {
  this.name = a;
  this.value = c;
};
l.debug.o.B.prototype.toString = function() {
  return this.name;
};
l.debug.o.B.OFF = new l.debug.o.B("OFF", Infinity);
l.debug.o.B.mj = new l.debug.o.B("SHOUT", 1200);
l.debug.o.B.Pf = new l.debug.o.B("SEVERE", 1E3);
l.debug.o.B.Uf = new l.debug.o.B("WARNING", 900);
l.debug.o.B.Df = new l.debug.o.B("INFO", 800);
l.debug.o.B.of = new l.debug.o.B("CONFIG", 700);
l.debug.o.B.vf = new l.debug.o.B("FINE", 500);
l.debug.o.B.oi = new l.debug.o.B("FINER", 400);
l.debug.o.B.pi = new l.debug.o.B("FINEST", 300);
l.debug.o.B.ALL = new l.debug.o.B("ALL", 0);
l.debug.o.B.Nd = [l.debug.o.B.OFF, l.debug.o.B.mj, l.debug.o.B.Pf, l.debug.o.B.Uf, l.debug.o.B.Df, l.debug.o.B.of, l.debug.o.B.vf, l.debug.o.B.oi, l.debug.o.B.pi, l.debug.o.B.ALL];
l.debug.o.B.ib = null;
l.debug.o.B.hg = function() {
  l.debug.o.B.ib = {};
  for (var a = 0, c;c = l.debug.o.B.Nd[a];a++) {
    l.debug.o.B.ib[c.value] = c, l.debug.o.B.ib[c.name] = c;
  }
};
l.debug.o.B.cu = function(a) {
  l.debug.o.B.ib || l.debug.o.B.hg();
  return l.debug.o.B.ib[a] || null;
};
l.debug.o.B.du = function(a) {
  l.debug.o.B.ib || l.debug.o.B.hg();
  if (a in l.debug.o.B.ib) {
    return l.debug.o.B.ib[a];
  }
  for (var c = 0;c < l.debug.o.B.Nd.length;++c) {
    var d = l.debug.o.B.Nd[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
l.debug.o.Ll = function(a) {
  l.global.console && (l.global.console.timeStamp ? l.global.console.timeStamp(a) : l.global.console.markTimeline && l.global.console.markTimeline(a));
  l.global.msWriteProfilerMark && l.global.msWriteProfilerMark(a);
};
b = l.debug.o.prototype;
b.getName = function() {
  return this.hb;
};
b.Vf = function(a) {
  l.debug.Ba && (l.debug.o.ac ? (this.Pb || (this.Pb = []), this.Pb.push(a)) : l.debug.o.Te.push(a));
};
b.Lh = function(a) {
  if (l.debug.Ba) {
    var c = l.debug.o.ac ? this.Pb : l.debug.o.Te;
    return !!c && l.c.remove(c, a);
  }
  return !1;
};
b.getParent = function() {
  return this.Oe;
};
b.getChildren = function() {
  this.Xd || (this.Xd = {});
  return this.Xd;
};
b.Cg = function() {
  if (!l.debug.Ba) {
    return l.debug.o.B.OFF;
  }
  if (!l.debug.o.ac) {
    return l.debug.o.Hv;
  }
  if (this.De) {
    return this.De;
  }
  if (this.Oe) {
    return this.Oe.Cg();
  }
  l.l.qa("Root logger has no level set.");
  return null;
};
b.ul = function(a) {
  return l.debug.Ba && a.value >= this.Cg().value;
};
b.log = function(a, c, d) {
  l.debug.Ba && this.ul(a) && (l.Ma(c) && (c = c()), this.lk(this.Jk(a, c, d)));
};
b.Jk = function(a, c, d) {
  a = l.debug.ja.ll() ? l.debug.ja.oe().Dj(a, c, this.hb) : new l.debug.ta(a, String(c), this.hb);
  d && a.Pm(d);
  return a;
};
b.Rm = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.Pf, a, c);
};
b.ai = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.Uf, a, c);
};
b.info = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.Df, a, c);
};
b.config = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.of, a, c);
};
b.wg = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.vf, a, c);
};
b.lk = function(a) {
  l.debug.o.Ll("log:" + a.getMessage());
  if (l.debug.o.ac) {
    for (var c = this;c;) {
      c.Pj(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = l.debug.o.Te[c++];) {
      d(a);
    }
  }
};
b.Pj = function(a) {
  if (this.Pb) {
    for (var c = 0, d;d = this.Pb[c];c++) {
      d(a);
    }
  }
};
l.debug.Ca = {};
l.debug.Ca.rh = {};
l.debug.Ca.initialize = function() {
  l.debug.Ca.Nh || (l.debug.Ca.rh[l.debug.o.Od] = l.debug.Ca.Nh);
};
l.debug.Ca.$t = function() {
  return l.debug.Ca.rh;
};
l.debug.Ca.fu = function() {
  l.debug.Ca.initialize();
  return l.debug.Ca.Nh;
};
l.debug.Ca.vt = function() {
  return function() {
  };
};
l.log = {};
l.log.lb = l.debug.Ba;
l.log.Od = l.debug.o.Od;
l.log.o = l.debug.o;
l.log.B = l.debug.o.B;
l.log.ta = l.debug.ta;
l.log.Vf = function(a, c) {
  l.log.lb && a && a.Vf(c);
};
l.log.Lh = function(a, c) {
  return l.log.lb && a ? a.Lh(c) : !1;
};
l.log.log = function(a, c, d, e) {
  l.log.lb && a && a.log(c, d, e);
};
l.log.error = function(a, c, d) {
  l.log.lb && a && a.Rm(c, d);
};
l.log.ai = function(a, c, d) {
  l.log.lb && a && a.ai(c, d);
};
l.log.info = function(a, c, d) {
  l.log.lb && a && a.info(c, d);
};
l.log.wg = function(a, c, d) {
  l.log.lb && a && a.wg(c, d);
};
chrome.cast.a.D.ab = function(a) {
  this.qd = a;
  this.ad = null;
  this.Ze = new l.A.Map;
  this.sb = new l.A.Map;
  this.Dc = new l.A.Map;
  this.Cc = new l.A.Map;
  this.Qe = new l.A.Map;
  this.Ce = this.hd = this.sd = null;
  this.qd.addMessageListener(this.Wc(), l.bind(this.Bh, this));
};
chrome.cast.a.D.ab.Rf = 6E4;
b = chrome.cast.a.D.ab.prototype;
b.Ua = function() {
  this.qd.removeMessageListener(chrome.cast.a.Ld, l.bind(this.Bh, this));
  for (var a = this.Dc.ma(), c = 0;c < a.length;c++) {
    this.Wb(a[c]);
  }
  this.hd = this.sd = null;
};
b.Wc = function() {
  return chrome.cast.a.Ld;
};
b.xm = function(a, c) {
  var d = new chrome.cast.a.D.zf;
  d.type = chrome.cast.a.D.oa.Cd;
  if (!d.requestId) {
    throw Error("Missing requestId field from request.");
  }
  if (!a) {
    throw Error("No success callback provided.");
  }
  this.ad = a;
  var e = l.Ac;
  c && (this.sb.set(d.requestId, c), e = function(a) {
    c(new chrome.cast.a.bc(chrome.cast.a.$a.xd, a.description, null, a));
    this.Wb(d.requestId);
  }.bind(this));
  var f = l.global.setTimeout(l.bind(this.Ch, this, d.requestId), chrome.cast.a.D.ab.Rf);
  this.Dc.set(d.requestId, f);
  this.Cc.set(d.requestId, d.type);
  this.qd.sendMessage(this.Wc(), d, l.Ac, e);
};
b.Ue = function(a, c, d, e, f) {
  if (c == chrome.cast.a.D.oa.UNKNOWN) {
    throw Error("Cannot send an UNKNOWN game manager request.");
  }
  if (!a && c != chrome.cast.a.D.oa.Lf && c != chrome.cast.a.D.oa.Cd) {
    throw Error("Missing player ID for game manager request type:" + c);
  }
  var g = new chrome.cast.a.D.zf;
  g.type = c;
  g.playerId = a ? a : "";
  g.playerToken = this.Qe.get(g.playerId, null);
  g.extraMessageData = d;
  if (!g.requestId) {
    throw Error("Missing requestId field from request");
  }
  e && this.Ze.set(g.requestId, e);
  a = l.Ac;
  f && (this.sb.set(g.requestId, f), a = function(a) {
    f(new chrome.cast.a.bc(chrome.cast.a.$a.xd, a.description, null, a));
    this.Wb(g.requestId);
  }.bind(this));
  g.type != chrome.cast.a.D.oa.GAME_MESSAGE && (c = l.global.setTimeout(l.bind(this.Ch, this, g.requestId), chrome.cast.a.D.ab.Rf), this.Dc.set(g.requestId, c));
  this.Cc.set(g.requestId, g.type);
  this.qd.sendMessage(this.Wc(), g, l.Ac, a);
};
b.Qm = function(a, c) {
  this.sd = a;
  this.hd = c;
};
b.yl = function(a) {
  return this.Qe.Jb(a);
};
b.Ea = function() {
  return this.Ce;
};
l.w(chrome.cast.a.D.ab.prototype, "getLastUsedPlayerId", chrome.cast.a.D.ab.prototype.Ea);
b = chrome.cast.a.D.ab.prototype;
b.Bh = function(a, c) {
  if (a != this.Wc()) {
    throw Error("Incoming message has unexpected namespace: " + a);
  }
  var d = l.json.parse(c), e = d.type;
  if (e != chrome.cast.a.D.cc.GAME_MANAGER_PROCESSED_RESULT && e != chrome.cast.a.D.cc.GAME_MESSAGE) {
    l.log.error(this.qh, "Ignoring message, type is not GAME_MANAGER_PROCESSED_RESULT or  GAME_MESSAGE Type: " + e);
  } else {
    if (d.gameManagerConfig && d.gameManagerConfig.version != chrome.cast.a.Rd && (d.statusCode = chrome.cast.a.D.Ha.INCORRECT_VERSION, d.errorDescription = "Incorrect version of the GameManager SDK. Sender: " + chrome.cast.a.Rd + "Receiver: " + d.gameManagerConfig.version), d.statusCode != chrome.cast.a.D.Ha.Td) {
      this.cm(d);
    } else {
      var e = d.playerId, f = d.playerToken;
      e && f && this.Qe.set(e, f);
      this.sd && this.sd(d);
      d.requestId && (this.Ce = e || this.Ce, this.em(d));
      this.hd && this.hd();
    }
  }
};
b.cm = function(a) {
  var c = a.requestId;
  if (this.sb.Jb(c)) {
    var d = this.sb.get(c), e = new chrome.cast.a.Ed(a.playerId, a.requestId, a.extraMessageData), f = chrome.cast.a.D.Ha.Ek(a.statusCode);
    d(new chrome.cast.a.bc(f, a.errorDescription, e, null));
    this.Wb(c);
  } else {
    l.log.info(this.qh, "Ignoring error message, no callback for request ID: " + c);
  }
};
b.em = function(a) {
  var c = a.requestId, d = this.Cc.get(c), e = this.Ze.get(a.requestId);
  this.Wb(c);
  if (d == chrome.cast.a.D.oa.Cd) {
    if (!this.ad) {
      throw Error("Got a response for a GET_GAME_MANAGER_CONFIG request but no initialization callback was set.");
    }
    this.ad();
    this.ad = null;
  } else {
    e ? e(new chrome.cast.a.Ed(a.playerId, a.requestId, a.extraMessageData)) : l.log.info(this.qh, "Ignoring message, no callback for request ID: " + c);
  }
};
b.Ch = function(a) {
  var c = this.Cc.get(a), c = "Did not receive a response to player request within a time period. request ID=" + a + " request type =" + c;
  if (this.sb.Jb(a)) {
    var d = this.sb.get(a), e = new chrome.cast.Error(chrome.cast.ErrorCode.TIMEOUT, c, null);
    d(new chrome.cast.a.bc(chrome.cast.a.$a.xd, c, null, e));
    this.Wb(a);
  } else {
    throw Error(c);
  }
};
b.Wb = function(a) {
  this.Ze.remove(a);
  this.sb.remove(a);
  var c = this.Dc.get(a);
  l.global.clearTimeout(c);
  this.Dc.remove(a);
  this.Cc.remove(a);
};
l.jk = {};
l.jk.Jp = function() {
};
l.O = function() {
  l.O.Jd != l.O.Kd.OFF && (l.O.yb[l.tc(this)] = this);
  this.nc = this.nc;
  this.gd = this.gd;
};
l.O.Kd = {OFF:0, Xi:1, Op:2};
l.O.Jd = 0;
l.O.Mp = !0;
l.O.yb = {};
l.O.hu = function() {
  var a = [], c;
  for (c in l.O.yb) {
    l.O.yb.hasOwnProperty(c) && a.push(l.O.yb[Number(c)]);
  }
  return a;
};
l.O.jt = function() {
  l.O.yb = {};
};
l.O.prototype.nc = !1;
l.O.prototype.isDisposed = function() {
  return this.nc;
};
l.O.prototype.Ua = function() {
  if (!this.nc && (this.nc = !0, this.be(), l.O.Jd != l.O.Kd.OFF)) {
    var a = l.tc(this);
    if (l.O.Jd == l.O.Kd.Xi && !l.O.yb.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete l.O.yb[a];
  }
};
l.O.prototype.be = function() {
  if (this.gd) {
    for (;this.gd.length;) {
      this.gd.shift()();
    }
  }
};
l.O.isDisposed = function(a) {
  return a && "function" == typeof a.isDisposed ? a.isDisposed() : !1;
};
l.Ua = function(a) {
  a && "function" == typeof a.Ua && a.Ua();
};
l.kk = function(a) {
  for (var c = 0, d = arguments.length;c < d;++c) {
    var e = arguments[c];
    l.W(e) ? l.kk.apply(null, e) : l.Ua(e);
  }
};
l.events = {};
l.events.tf = function(a) {
  this.id = a;
};
l.events.tf.prototype.toString = function() {
  return this.id;
};
l.events.Event = function(a, c) {
  this.type = a instanceof l.events.tf ? String(a) : a;
  this.currentTarget = this.target = c;
  this.defaultPrevented = this.Ab = !1;
  this.Mh = !0;
};
l.events.Event.prototype.stopPropagation = function() {
  this.Ab = !0;
};
l.events.Event.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Mh = !1;
};
l.events.Event.stopPropagation = function(a) {
  a.stopPropagation();
};
l.events.Event.preventDefault = function(a) {
  a.preventDefault();
};
l.debug.ca = {};
l.debug.ep = function() {
};
l.debug.ca.Ub = [];
l.debug.ca.Me = [];
l.debug.ca.wh = !1;
l.debug.ca.register = function(a) {
  l.debug.ca.Ub[l.debug.ca.Ub.length] = a;
  if (l.debug.ca.wh) {
    for (var c = l.debug.ca.Me, d = 0;d < c.length;d++) {
      a(l.bind(c[d].ln, c[d]));
    }
  }
};
l.debug.ca.jv = function(a) {
  l.debug.ca.wh = !0;
  for (var c = l.bind(a.ln, a), d = 0;d < l.debug.ca.Ub.length;d++) {
    l.debug.ca.Ub[d](c);
  }
  l.debug.ca.Me.push(a);
};
l.debug.ca.sw = function(a) {
  var c = l.debug.ca.Me;
  a = l.bind(a.P, a);
  for (var d = 0;d < l.debug.ca.Ub.length;d++) {
    l.debug.ca.Ub[d](a);
  }
  c.length--;
};
l.Bb = {};
l.Bb.object = function(a, c) {
  return c;
};
l.Bb.We = function(a) {
  l.Bb.We[" "](a);
  return a;
};
l.Bb.We[" "] = l.Ac;
l.Bb.Rj = function(a, c) {
  try {
    return l.Bb.We(a[c]), !0;
  } catch (d) {
  }
  return !1;
};
l.events.Hc = {yp:!l.userAgent.Aa || l.userAgent.ye(9), Fd:!l.userAgent.Aa || l.userAgent.ye(9), lj:l.userAgent.Aa && !l.userAgent.ra("9"), xp:!l.userAgent.Ra || l.userAgent.ra("528"), wp:l.userAgent.Jc && l.userAgent.ra("1.9b") || l.userAgent.Aa && l.userAgent.ra("8") || l.userAgent.Md && l.userAgent.ra("9.5") || l.userAgent.Ra && l.userAgent.ra("528"), Fp:l.userAgent.Jc && !l.userAgent.ra("8") || l.userAgent.Aa && !l.userAgent.ra("9"), ls:"ontouchstart" in l.global || !!(l.global.document && document.documentElement && 
"ontouchstart" in document.documentElement) || !(!l.global.navigator || !l.global.navigator.msMaxTouchPoints)};
l.events.Yc = function(a) {
  return l.userAgent.Ra ? "webkit" + a : l.userAgent.Md ? "o" + a.toLowerCase() : a.toLowerCase();
};
l.events.uf = {Yn:"click", Br:"rightclick", so:"dblclick", uq:"mousedown", yq:"mouseup", Ni:"mouseover", Mi:"mouseout", xq:"mousemove", vq:"mouseenter", wq:"mouseleave", Kr:"selectstart", ys:"wheel", Vp:"keypress", Tp:"keydown", Wp:"keyup", On:"blur", jp:"focus", uo:"deactivate", kp:l.userAgent.Aa ? "focusin" : "DOMFocusIn", lp:l.userAgent.Aa ? "focusout" : "DOMFocusOut", Wn:"change", yr:"reset", kj:"select", Tr:"submit", Ei:"input", wr:"propertychange", To:"dragstart", Oo:"drag", Qo:"dragenter", 
So:"dragover", Ro:"dragleave", Uo:"drop", Po:"dragend", ks:"touchstart", js:"touchmove", hs:"touchend", gs:"touchcancel", Ln:"beforeunload", lo:"consolemessage", mo:"contextmenu", Io:"DOMContentLoaded", ERROR:"error", Bp:"help", LOAD:"load", gq:"losecapture", ar:"orientationchange", xr:"readystatechange", zr:"resize", Ir:"scroll", ts:"unload", vp:"hashchange", er:"pagehide", fr:"pageshow", sr:"popstate", no:"copy", ir:"paste", oo:"cut", Hn:"beforecopy", In:"beforecut", Jn:"beforepaste", Yq:"online", 
Wq:"offline", oq:"message", ko:"connect", wn:l.events.Yc("AnimationStart"), un:l.events.Yc("AnimationEnd"), vn:l.events.Yc("AnimationIteration"), ns:l.events.Yc("TransitionEnd"), lr:"pointerdown", rr:"pointerup", kr:"pointercancel", or:"pointermove", qr:"pointerover", pr:"pointerout", mr:"pointerenter", nr:"pointerleave", op:"gotpointercapture", hq:"lostpointercapture", zq:"MSGestureChange", Aq:"MSGestureEnd", Bq:"MSGestureHold", Cq:"MSGestureStart", Dq:"MSGestureTap", Eq:"MSGotPointerCapture", Fq:"MSInertiaStart", 
Gq:"MSLostPointerCapture", Hq:"MSPointerCancel", Iq:"MSPointerDown", Jq:"MSPointerEnter", Kq:"MSPointerHover", Lq:"MSPointerLeave", Mq:"MSPointerMove", Nq:"MSPointerOut", Oq:"MSPointerOver", Pq:"MSPointerUp", TEXT:"text", as:"textInput", io:"compositionstart", jo:"compositionupdate", ho:"compositionend", cp:"exit", aq:"loadabort", bq:"loadcommit", cq:"loadredirect", eq:"loadstart", fq:"loadstop", Ar:"responsive", Lr:"sizechanged", us:"unresponsive", ws:"visibilitychange", Pr:"storage", No:"DOMSubtreeModified", 
Jo:"DOMNodeInserted", Lo:"DOMNodeRemoved", Mo:"DOMNodeRemovedFromDocument", Ko:"DOMNodeInsertedIntoDocument", Go:"DOMAttrModified", Ho:"DOMCharacterDataModified", Kn:"beforeprint", tn:"afterprint"};
l.events.Fa = function(a, c) {
  l.events.Event.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.pc = this.state = null;
  a && this.init(a, c);
};
l.wb(l.events.Fa, l.events.Event);
l.events.Fa.Qq = {dc:0, rq:1, ec:2};
l.events.Fa.Kp = [1, 4, 2];
l.events.Fa.prototype.init = function(a, c) {
  var d = this.type = a.type, e = a.changedTouches ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  var f = a.relatedTarget;
  f ? l.userAgent.Jc && (l.Bb.Rj(f, "nodeName") || (f = null)) : d == l.events.uf.Ni ? f = a.fromElement : d == l.events.uf.Mi && (f = a.toElement);
  this.relatedTarget = f;
  l.gh(e) ? (this.offsetX = l.userAgent.Ra || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = l.userAgent.Ra || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, 
  this.screenY = e.screenY || 0);
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == d ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.pc = a;
  a.defaultPrevented && this.preventDefault();
};
l.events.Fa.prototype.stopPropagation = function() {
  l.events.Fa.Db.stopPropagation.call(this);
  this.pc.stopPropagation ? this.pc.stopPropagation() : this.pc.cancelBubble = !0;
};
l.events.Fa.prototype.preventDefault = function() {
  l.events.Fa.Db.preventDefault.call(this);
  var a = this.pc;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, l.events.Hc.lj) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (c) {
      }
    }
  }
};
l.events.ia = function() {
};
l.events.ia.Cf = "closure_listenable_" + (1E6 * Math.random() | 0);
l.events.ia.Cj = function(a) {
  a.prototype[l.events.ia.Cf] = !0;
};
l.events.ia.Ya = function(a) {
  return !(!a || !a[l.events.ia.Cf]);
};
l.events.Mc = function() {
};
l.events.Mc.Xj = 0;
l.events.Mc.nm = function() {
  return ++l.events.Mc.Xj;
};
l.events.Id = function(a, c, d, e, f, g) {
  this.listener = a;
  this.proxy = c;
  this.src = d;
  this.type = e;
  this.Hb = !!f;
  this.Zc = g;
  this.key = l.events.Mc.nm();
  this.removed = this.Pc = !1;
};
l.events.Id.$o = !1;
l.events.Id.prototype.ed = function() {
  this.removed = !0;
  this.Zc = this.src = this.proxy = this.listener = null;
};
l.events.bb = function(a) {
  this.src = a;
  this.$ = {};
  this.Ec = 0;
};
b = l.events.bb.prototype;
b.Rk = function() {
  return this.Ec;
};
b.add = function(a, c, d, e, f) {
  var g = a.toString();
  a = this.$[g];
  a || (a = this.$[g] = [], this.Ec++);
  var h = l.events.bb.ee(a, c, e, f);
  -1 < h ? (c = a[h], d || (c.Pc = !1)) : (c = new l.events.Id(c, null, this.src, g, !!e, f), c.Pc = d, a.push(c));
  return c;
};
b.remove = function(a, c, d, e) {
  a = a.toString();
  if (!(a in this.$)) {
    return !1;
  }
  var f = this.$[a];
  c = l.events.bb.ee(f, c, d, e);
  return -1 < c ? (f[c].ed(), l.c.Vb(f, c), 0 == f.length && (delete this.$[a], this.Ec--), !0) : !1;
};
b.Kh = function(a) {
  var c = a.type;
  if (!(c in this.$)) {
    return !1;
  }
  var d = l.c.remove(this.$[c], a);
  d && (a.ed(), 0 == this.$[c].length && (delete this.$[c], this.Ec--));
  return d;
};
b.removeAll = function(a) {
  a = a && a.toString();
  var c = 0, d;
  for (d in this.$) {
    if (!a || d == a) {
      for (var e = this.$[d], f = 0;f < e.length;f++) {
        ++c, e[f].ed();
      }
      delete this.$[d];
      this.Ec--;
    }
  }
  return c;
};
b.rc = function(a, c) {
  var d = this.$[a.toString()], e = [];
  if (d) {
    for (var f = 0;f < d.length;++f) {
      var g = d[f];
      g.Hb == c && e.push(g);
    }
  }
  return e;
};
b.Nb = function(a, c, d, e) {
  a = this.$[a.toString()];
  var f = -1;
  a && (f = l.events.bb.ee(a, c, d, e));
  return -1 < f ? a[f] : null;
};
b.hasListener = function(a, c) {
  var d = l.ha(a), e = d ? a.toString() : "", f = l.ha(c);
  return l.object.some(this.$, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(d && a[h].type != e || f && a[h].Hb != c)) {
        return !0;
      }
    }
    return !1;
  });
};
l.events.bb.ee = function(a, c, d, e) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.removed && g.listener == c && g.Hb == !!d && g.Zc == e) {
      return f;
    }
  }
  return -1;
};
l.events.Gd = "closure_lm_" + (1E6 * Math.random() | 0);
l.events.fm = "on";
l.events.Ne = {};
l.events.yd = {Ri:0, Si:1, Ti:2};
l.events.wd = 2;
l.events.Fe = 0;
l.events.listen = function(a, c, d, e, f) {
  if (l.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      l.events.listen(a, c[g], d, e, f);
    }
    return null;
  }
  d = l.events.td(d);
  return l.events.ia.Ya(a) ? a.listen(c, d, e, f) : l.events.ph(a, c, d, !1, e, f);
};
l.events.ph = function(a, c, d, e, f, g) {
  if (!c) {
    throw Error("Invalid event type");
  }
  var h = !!f;
  if (h && !l.events.Hc.Fd) {
    if (l.events.wd == l.events.yd.Ri) {
      return l.l.qa("Can not register capture listener in IE8-."), null;
    }
    if (l.events.wd == l.events.yd.Si) {
      return null;
    }
  }
  var k = l.events.fb(a);
  k || (a[l.events.Gd] = k = new l.events.bb(a));
  d = k.add(c, d, e, f, g);
  if (d.proxy) {
    return d;
  }
  e = l.events.Ok();
  d.proxy = e;
  e.src = a;
  e.listener = d;
  if (a.addEventListener) {
    a.addEventListener(c.toString(), e, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(l.events.Jg(c.toString()), e);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  l.events.Fe++;
  return d;
};
l.events.Ok = function() {
  var a = l.events.vc, c = l.events.Hc.Fd ? function(d) {
    return a.call(c.src, c.listener, d);
  } : function(d) {
    d = a.call(c.src, c.listener, d);
    if (!d) {
      return d;
    }
  };
  return c;
};
l.events.Ee = function(a, c, d, e, f) {
  if (l.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      l.events.Ee(a, c[g], d, e, f);
    }
    return null;
  }
  d = l.events.td(d);
  return l.events.ia.Ya(a) ? a.Ee(c, d, e, f) : l.events.ph(a, c, d, !0, e, f);
};
l.events.Zu = function(a, c, d, e, f) {
  c.listen(a, d, e, f);
};
l.events.Yb = function(a, c, d, e, f) {
  if (l.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      l.events.Yb(a, c[g], d, e, f);
    }
    return null;
  }
  d = l.events.td(d);
  if (l.events.ia.Ya(a)) {
    return a.Yb(c, d, e, f);
  }
  if (!a) {
    return !1;
  }
  if (a = l.events.fb(a)) {
    if (c = a.Nb(c, d, !!e, f)) {
      return l.events.Zb(c);
    }
  }
  return !1;
};
l.events.Zb = function(a) {
  if (l.yc(a) || !a || a.removed) {
    return !1;
  }
  var c = a.src;
  if (l.events.ia.Ya(c)) {
    return c.Zb(a);
  }
  var d = a.type, e = a.proxy;
  c.removeEventListener ? c.removeEventListener(d, e, a.Hb) : c.detachEvent && c.detachEvent(l.events.Jg(d), e);
  l.events.Fe--;
  (d = l.events.fb(c)) ? (d.Kh(a), 0 == d.Rk() && (d.src = null, c[l.events.Gd] = null)) : a.ed();
  return !0;
};
l.events.rw = function(a, c, d, e, f) {
  c.Yb(a, d, e, f);
};
l.events.removeAll = function(a, c) {
  if (!a) {
    return 0;
  }
  if (l.events.ia.Ya(a)) {
    return a.Jh(c);
  }
  var d = l.events.fb(a);
  if (!d) {
    return 0;
  }
  var e = 0, f = c && c.toString(), g;
  for (g in d.$) {
    if (!f || g == f) {
      for (var h = d.$[g].concat(), k = 0;k < h.length;++k) {
        l.events.Zb(h[k]) && ++e;
      }
    }
  }
  return e;
};
l.events.rc = function(a, c, d) {
  return l.events.ia.Ya(a) ? a.rc(c, d) : a ? (a = l.events.fb(a)) ? a.rc(c, d) : [] : [];
};
l.events.Nb = function(a, c, d, e, f) {
  d = l.events.td(d);
  e = !!e;
  return l.events.ia.Ya(a) ? a.Nb(c, d, e, f) : a ? (a = l.events.fb(a)) ? a.Nb(c, d, e, f) : null : null;
};
l.events.hasListener = function(a, c, d) {
  if (l.events.ia.Ya(a)) {
    return a.hasListener(c, d);
  }
  a = l.events.fb(a);
  return !!a && a.hasListener(c, d);
};
l.events.qk = function(a) {
  var c = [], d;
  for (d in a) {
    a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
  }
  return c.join("\n");
};
l.events.Jg = function(a) {
  return a in l.events.Ne ? l.events.Ne[a] : l.events.Ne[a] = l.events.fm + a;
};
l.events.Lb = function(a, c, d, e) {
  return l.events.ia.Ya(a) ? a.Lb(c, d, e) : l.events.ge(a, c, d, e);
};
l.events.ge = function(a, c, d, e) {
  var f = !0;
  if (a = l.events.fb(a)) {
    if (c = a.$[c.toString()]) {
      for (c = c.concat(), a = 0;a < c.length;a++) {
        var g = c[a];
        g && g.Hb == d && !g.removed && (g = l.events.fe(g, e), f = f && !1 !== g);
      }
    }
  }
  return f;
};
l.events.fe = function(a, c) {
  var d = a.listener, e = a.Zc || a.src;
  a.Pc && l.events.Zb(a);
  return d.call(e, c);
};
l.events.gu = function() {
  return l.events.Fe;
};
l.events.dispatchEvent = function(a, c) {
  return a.dispatchEvent(c);
};
l.events.xv = function(a) {
  l.events.vc = a.yv(l.events.vc);
};
l.events.vc = function(a, c) {
  if (a.removed) {
    return !0;
  }
  if (!l.events.Hc.Fd) {
    var d = c || l.Ig("window.event"), e = new l.events.Fa(d, this), f = !0;
    if (l.events.wd == l.events.yd.Ti) {
      if (!l.events.wl(d)) {
        l.events.Rl(d);
        for (var d = [], g = e.currentTarget;g;g = g.parentNode) {
          d.push(g);
        }
        for (var g = a.type, h = d.length - 1;!e.Ab && 0 <= h;h--) {
          e.currentTarget = d[h];
          var k = l.events.ge(d[h], g, !0, e), f = f && k;
        }
        for (h = 0;!e.Ab && h < d.length;h++) {
          e.currentTarget = d[h], k = l.events.ge(d[h], g, !1, e), f = f && k;
        }
      }
    } else {
      f = l.events.fe(a, e);
    }
    return f;
  }
  return l.events.fe(a, new l.events.Fa(c, this));
};
l.events.Rl = function(a) {
  var c = !1;
  if (0 == a.keyCode) {
    try {
      a.keyCode = -1;
      return;
    } catch (d) {
      c = !0;
    }
  }
  if (c || void 0 == a.returnValue) {
    a.returnValue = !0;
  }
};
l.events.wl = function(a) {
  return 0 > a.keyCode || void 0 != a.returnValue;
};
l.events.fn = 0;
l.events.iu = function(a) {
  return a + "_" + l.events.fn++;
};
l.events.fb = function(a) {
  a = a[l.events.Gd];
  return a instanceof l.events.bb ? a : null;
};
l.events.Hd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
l.events.td = function(a) {
  if (l.Ma(a)) {
    return a;
  }
  a[l.events.Hd] || (a[l.events.Hd] = function(c) {
    return a.handleEvent(c);
  });
  return a[l.events.Hd];
};
l.debug.ca.register(function(a) {
  l.events.vc = a(l.events.vc);
});
l.events.EventTarget = function() {
  l.O.call(this);
  this.Ja = new l.events.bb(this);
  this.Bj = this;
  this.Dh = null;
};
l.wb(l.events.EventTarget, l.O);
l.events.ia.Cj(l.events.EventTarget);
l.events.EventTarget.mq = 1E3;
b = l.events.EventTarget.prototype;
b.Kg = function() {
  return this.Dh;
};
b.addEventListener = function(a, c, d, e) {
  l.events.listen(this, a, c, d, e);
};
b.removeEventListener = function(a, c, d, e) {
  l.events.Yb(this, a, c, d, e);
};
b.dispatchEvent = function(a) {
  var c, d = this.Kg();
  if (d) {
    for (c = [];d;d = d.Kg()) {
      c.push(d);
    }
  }
  return l.events.EventTarget.gk(this.Bj, a, c);
};
b.be = function() {
  l.events.EventTarget.Db.be.call(this);
  this.Jh();
  this.Dh = null;
};
b.listen = function(a, c, d, e) {
  return this.Ja.add(String(a), c, !1, d, e);
};
b.Ee = function(a, c, d, e) {
  return this.Ja.add(String(a), c, !0, d, e);
};
b.Yb = function(a, c, d, e) {
  return this.Ja.remove(String(a), c, d, e);
};
b.Zb = function(a) {
  return this.Ja.Kh(a);
};
b.Jh = function(a) {
  return this.Ja ? this.Ja.removeAll(a) : 0;
};
b.Lb = function(a, c, d) {
  a = this.Ja.$[String(a)];
  if (!a) {
    return !0;
  }
  a = a.concat();
  for (var e = !0, f = 0;f < a.length;++f) {
    var g = a[f];
    if (g && !g.removed && g.Hb == c) {
      var h = g.listener, k = g.Zc || g.src;
      g.Pc && this.Zb(g);
      e = !1 !== h.call(k, d) && e;
    }
  }
  return e && 0 != d.Mh;
};
b.rc = function(a, c) {
  return this.Ja.rc(String(a), c);
};
b.Nb = function(a, c, d, e) {
  return this.Ja.Nb(String(a), c, d, e);
};
b.hasListener = function(a, c) {
  return this.Ja.hasListener(l.ha(a) ? String(a) : void 0, c);
};
l.events.EventTarget.gk = function(a, c, d) {
  var e = c.type || c;
  if (l.G(c)) {
    c = new l.events.Event(c, a);
  } else {
    if (c instanceof l.events.Event) {
      c.target = c.target || a;
    } else {
      var f = c;
      c = new l.events.Event(e, a);
      l.object.extend(c, f);
    }
  }
  var f = !0, g;
  if (d) {
    for (var h = d.length - 1;!c.Ab && 0 <= h;h--) {
      g = c.currentTarget = d[h], f = g.Lb(e, !0, c) && f;
    }
  }
  c.Ab || (g = c.currentTarget = a, f = g.Lb(e, !0, c) && f, c.Ab || (f = g.Lb(e, !1, c) && f));
  if (d) {
    for (h = 0;!c.Ab && h < d.length;h++) {
      g = c.currentTarget = d[h], f = g.Lb(e, !1, c) && f;
    }
  }
  return f;
};
l.i = {};
l.i.m = {};
l.i.m.Ga = function(a, c, d, e, f) {
  this.Zd = a;
  this.hb = c;
  this.Wf = d;
  this.Hj = e;
  this.Gh = f;
};
l.i.m.Ga.prototype.getName = function() {
  return this.hb;
};
l.i.m.Ga.prototype.kl = function() {
  return !this.hb || "[object Object]" == this.Zd;
};
l.i.m.Ga.prototype.Ym = function() {
  var a = l.i.m.gl, c = l.i.m.Xl, c = [this.Zd ? a(this.Zd) + "." : "", this.hb ? a(c(this.hb)) : "anonymous", a(this.Hj), this.Wf ? " [as " + a(c(this.Wf)) + "]" : ""];
  this.Gh && (c.push(" at "), c.push(a(this.Gh)));
  return c.join("");
};
l.i.m.Ki = 20;
l.i.m.Li = 5E5;
l.i.m.za = "[a-zA-Z_$][\\w$]*";
l.i.m.tj = "(?: \\[as (" + l.i.m.za + ")\\])?";
l.i.m.uj = "(?:((?:new )?(?:\\[object Object\\]|" + l.i.m.za + "(?:\\." + l.i.m.za + ")*))\\.)?";
l.i.m.wj = "(?:new )?(?:" + l.i.m.za + "|<anonymous>)";
l.i.m.vj = " " + l.i.m.uj + "(" + l.i.m.wj + ")" + l.i.m.tj;
l.i.m.Vd = "((?:http|https|file)://[^\\s)]+|javascript:.*)";
l.i.m.fi = " (?:\\(unknown source\\)|\\(native\\)|\\((.+)\\)|(.+))";
l.i.m.xj = new RegExp("^    at(?:" + l.i.m.vj + ")?" + l.i.m.fi + "$");
l.i.m.ri = "(" + l.i.m.za + ")?(\\(.*\\))?@";
l.i.m.si = new RegExp("^" + l.i.m.ri + "(?::0|" + l.i.m.Vd + ")$");
l.i.m.Ui = "<anonymous function(?:\\: (?:(" + l.i.m.za + "(?:\\." + l.i.m.za + ")*)\\.)?(" + l.i.m.za + "))?>";
l.i.m.Vi = "(?:(?:(" + l.i.m.za + ")|" + l.i.m.Ui + ")(\\(.*\\)))?@";
l.i.m.Wi = new RegExp("^" + l.i.m.Vi + l.i.m.Vd + "?$");
l.i.m.vi = new RegExp("^function (" + l.i.m.za + ")");
l.i.m.Ci = "(" + l.i.m.za + "(?:\\s+\\w+)*)";
l.i.m.Di = new RegExp("^   at " + l.i.m.Ci + "\\s*\\((eval code:[^)]*|" + l.i.m.Vd + ")\\)?$");
l.i.m.xk = function() {
  for (var a = [], c = arguments.callee.caller, d = 0;c && d < l.i.m.Ki;) {
    var e = Function.prototype.toString.call(c).match(l.i.m.vi), e = e ? e[1] : "", f = ["("];
    if (c.arguments) {
      for (var g = 0;g < c.arguments.length;g++) {
        var h = c.arguments[g];
        0 < g && f.push(", ");
        l.G(h) ? f.push('"', h, '"') : h && h.$replay ? f.push("goog.testing.Mock") : f.push(String(h));
      }
    } else {
      f.push("unknown");
    }
    f.push(")");
    f = f.join("");
    a.push(new l.i.m.Ga("", e, "", f, ""));
    try {
      c = c.caller;
    } catch (k) {
      break;
    }
    d++;
  }
  return a;
};
l.i.m.hm = function(a) {
  var c = a.match(l.i.m.xj);
  return c ? new l.i.m.Ga(c[1] || "", c[2] || "", c[3] || "", "", c[4] || c[5] || c[6] || "") : a.length > l.i.m.Li ? l.i.m.gm(a) : (c = a.match(l.i.m.si)) ? new l.i.m.Ga("", c[1] || "", "", c[2] || "", c[3] || "") : (c = a.match(l.i.m.Wi)) ? new l.i.m.Ga(c[2] || "", c[1] || c[3] || "", "", c[4] || "", c[5] || "") : (c = a.match(l.i.m.Di)) ? new l.i.m.Ga("", c[1] || "", "", "", c[2] || "") : null;
};
l.i.m.gm = function(a) {
  var c = a.indexOf("("), d = a.lastIndexOf("@"), e = a.lastIndexOf(":"), f = "";
  0 <= c && c < d && (f = a.substring(0, c));
  var g = "";
  0 <= d && d + 1 < e && (g = a.substring(d + 1));
  e = "";
  0 <= c && 0 < d && c < d && (e = a.substring(c, d));
  return new l.i.m.Ga("", f, "", e, g);
};
l.i.m.Om = function(a) {
  l.i.m.og = a;
};
l.i.m.Xl = function(a) {
  return l.i.m.og ? l.i.m.og(a) : a;
};
l.i.m.gl = function(a) {
  return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
};
l.i.m.zg = function(a) {
  for (var c = a.length - 1;a[c] && a[c].kl();) {
    c--;
  }
  for (var d = -1, e = 0;e < a.length;e++) {
    if (a[e] && "_assert" == a[e].getName()) {
      d = e;
      break;
    }
  }
  for (var f = [], e = d + 1;e <= c;e++) {
    f.push("> "), a[e] ? f.push(a[e].Ym()) : f.push("(unknown)"), f.push("\n");
  }
  return f.join("");
};
l.i.m.Eh = function(a) {
  a = a.replace(/\s*$/, "").split("\n");
  for (var c = [], d = 0;d < a.length;d++) {
    c.push(l.i.m.hm(a[d]));
  }
  return c;
};
l.i.m.$s = function(a) {
  a = l.i.m.Eh(a);
  return l.i.m.zg(a);
};
l.i.m.Kk = function() {
  var a = Error();
  if (a.stack) {
    return a.stack;
  }
  try {
    null.x();
  } catch (c) {
    return c.stack;
  }
  return "";
};
l.i.m.get = function() {
  var a = l.i.m.Kk(), a = a ? l.isArray(a) ? l.i.m.Qj(a) : l.i.m.Eh(a) : l.i.m.xk();
  return l.i.m.zg(a);
};
l.i.m.Qj = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    var e = a[d], f = e.getFunctionName() || "unknown", g = e.getFileName(), e = g ? g + ":" + e.getLineNumber() + ":" + e.getColumnNumber() : "unknown";
    c.push(new l.i.m.Ga("", f, "", "", e));
  }
  return c;
};
l.F("setDeobfuscateFunctionName", l.i.m.Om);
l.i.l = {};
var p = function(a, c) {
  return a == c;
}, x = function(a, c) {
  return a.toString() === c.toString();
}, y = {String:p, Number:p, Boolean:p, Date:function(a, c) {
  return a.getTime() == c.getTime();
}, RegExp:x, Function:x};
l.i.l.zh = function(a, c, d) {
  return Math.abs(a - c) <= d;
};
l.i.l.km = {Number:l.i.l.zh};
var _trueTypeOf = function(a) {
  var c = typeof a;
  try {
    switch(c) {
      case "object":
        if (null == a) {
          c = "null";
          break;
        }
      ;
      case "function":
        switch(a.constructor) {
          case (new String("")).constructor:
            c = "String";
            break;
          case (new Boolean(!0)).constructor:
            c = "Boolean";
            break;
          case (new Number(0)).constructor:
            c = "Number";
            break;
          case [].constructor:
            c = "Array";
            break;
          case RegExp().constructor:
            c = "RegExp";
            break;
          case (new Date).constructor:
            c = "Date";
            break;
          case Function:
            c = "Function";
            break;
          default:
            var d = a.constructor.toString().match(/function\s*([^( ]+)\(/);
            d && (c = d[1]);
        }
        break;
    }
  } catch (e) {
  } finally {
    c = c.substr(0, 1).toUpperCase() + c.substr(1);
  }
  return c;
}, _displayStringForValue = function(a) {
  var c;
  try {
    c = "<" + String(a) + ">";
  } catch (d) {
    c = "<toString failed: " + d.message + ">";
  }
  null !== a && void 0 !== a && (c += " (" + _trueTypeOf(a) + ")");
  return c;
}, z = function(a, c) {
  return c.length == a + 1 ? c[0] : null;
}, A = function(a, c, d) {
  return d.length == c + 1 ? d[a] : d[a - 1];
}, _validateArguments = function(a, c) {
  _assert(null, c.length == a || c.length == a + 1 && l.G(c[0]), "Incorrect arguments passed to assert function");
}, _assert = function(a, c, d) {
  c || l.i.l.nd(a, d);
};
l.i.l.eb = function(a, c) {
  var d = "Expected " + _displayStringForValue(a) + " but was " + _displayStringForValue(c);
  if ("string" == typeof a && "string" == typeof c) {
    for (var e = Math.min(a.length, c.length), f = 0;f < e && a.charAt(f) == c.charAt(f);) {
      f++;
    }
    for (var g = 0;g < e && a.charAt(a.length - g - 1) == c.charAt(c.length - g - 1);) {
      g++;
    }
    f + g > e && (g = 0);
    if (2 < f || 2 < g) {
      e = function(a) {
        var c = Math.max(0, f - 2), d = Math.min(a.length, a.length - (g - 2));
        return (0 < c ? "..." : "") + a.substring(c, d) + (d < a.length ? "..." : "");
      }, d += "\nDifference was at position " + f + ". Expected [" + e(a) + "] vs. actual [" + e(c) + "]";
    }
  }
  return d;
};
var B = function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, l.bd(e), "Bad argument to assert(boolean)");
  _assert(d, e, "Call to assert(boolean) with false");
}, C = function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, l.bd(e), "Bad argument to assertTrue(boolean)");
  _assert(d, e, "Call to assertTrue(boolean) with false");
}, D = function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  _assert(z(2, arguments), e === f, l.i.l.eb(e, f));
}, E = function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), null !== A(1, 1, arguments), "Expected not to be " + _displayStringForValue(null));
}, F = function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), void 0 !== A(1, 1, arguments), "Expected not to be " + _displayStringForValue(void 0));
};
l.i.l.Zs = function(a) {
  var c = l.global.G_testRunner, d = c.logTestFailure;
  try {
    c.logTestFailure = void 0, a();
  } finally {
    c.logTestFailure = d;
  }
};
l.i.l.Ad = null;
l.i.l.Bd = "";
l.i.l.tb = function(a, c, d) {
  function e(a, c, d) {
    for (var q = 0;q < g.length;++q) {
      var u = g[q] === a, v = h[q] === c;
      if (u || v) {
        u && v || f.push("Asymmetric cycle detected at " + d);
        return;
      }
    }
    g.push(a);
    h.push(c);
    if (a !== c) {
      if (q = _trueTypeOf(a), u = _trueTypeOf(c), q == u) {
        var v = "Array" == q, w = k(q, a, c);
        if (w != l.i.l.Ad) {
          w != l.i.l.Bd && f.push(d + ": " + w);
        } else {
          if (v && a.length != c.length) {
            f.push(d + ": Expected " + a.length + "-element array but got a " + c.length + "-element array");
          } else {
            if (w = d + (v ? "[%s]" : d ? ".%s" : "%s"), a.__iterator__) {
              l.Ma(a.pa) ? a.pa(c) || f.push("equals() returned false for " + (d || q)) : a.N ? e(a.N, c.N, w.replace("%s", "map_")) : f.push("unable to check " + (d || q) + " for equality: it has an iterator we do not know how to handle. please add an equals method");
            } else {
              for (var r in a) {
                v && l.i.l.Vg(r) || (r in c ? e(a[r], c[r], w.replace("%s", r)) : f.push("property " + r + " not present in actual " + (d || u)));
              }
              for (r in c) {
                v && l.i.l.Vg(r) || r in a || f.push("property " + r + " not present in expected " + (d || q));
              }
              if (v) {
                for (r = 0;r < a.length;r++) {
                  e(a[r], c[r], w.replace("%s", String(r)));
                }
              }
            }
          }
        }
      } else {
        f.push(d + " " + l.i.l.eb(a, c));
      }
    }
    g.pop();
    h.pop();
  }
  var f = [], g = [], h = [], k = d || function(a, c, d) {
    return (a = y[a]) ? a(c, d) ? l.i.l.Bd : l.i.l.eb(c, d) : l.i.l.Ad;
  };
  e(a, c, "");
  return 0 == f.length ? null : l.i.l.eb(a, c) + "\n   " + f.join("\n   ");
};
var G = function(a, c, d) {
  _validateArguments(2, arguments);
  var e = z(2, arguments) ? z(2, arguments) : "", f = l.i.l.tb(A(1, 2, arguments), A(2, 2, arguments));
  _assert(e, !f, f);
}, H = function(a, c, d, e) {
  _validateArguments(3, arguments);
  var f = A(1, 3, arguments), g = A(2, 3, arguments), h = A(3, 3, arguments);
  _assert(z(3, arguments), l.i.l.zh(f, g, h), "Expected " + f + ", but got " + g + " which was more than " + h + " away");
};
l.i.l.$e = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = a[d];
  }
  return c;
};
l.i.l.Qg = function(a, c) {
  if (a.indexOf) {
    return a.indexOf(c);
  }
  for (var d = 0;d < a.length;d++) {
    if (a[d] === c) {
      return d;
    }
  }
  return -1;
};
l.i.l.gg = function(a, c) {
  return -1 != l.i.l.Qg(a, c);
};
var J = function(a) {
  var c = document.createElement("DIV");
  c.innerHTML = a;
  return c.innerHTML.replace(/^\s+|\s+$/g, "");
};
l.i.l.nd = function(a, c) {
  throw new l.i.Lc(a, c);
};
l.i.l.Vg = function(a) {
  return (a | 0) == a;
};
l.i.Lc = function(a, c) {
  this.message = (a ? a : "") + (a && c ? "\n" : "") + (c ? c : "");
  l.i.m.get();
  this.comment = a || null;
  Error.captureStackTrace ? Error.captureStackTrace(this, l.i.Lc) : this.stack = Error().stack || "";
};
l.wb(l.i.Lc, Error);
l.i.Lc.prototype.toString = function() {
  return this.message;
};
l.F("fail", function(a) {
  l.i.l.nd("Call to fail()", a);
});
l.F("assert", B);
l.F("assertThrows", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments), e = z(1, arguments);
  _assert(e, "function" == typeof d, "Argument passed to assertThrows is not a function");
  try {
    d();
  } catch (f) {
    return f && l.G(f.stacktrace) && l.G(f.message) && (d = f.message.length - f.stacktrace.length, f.message.indexOf(f.stacktrace, d) == d && (f.message = f.message.substr(0, d - 14))), f;
  }
  l.i.l.nd(e, "No exception thrown from function passed to assertThrows");
});
l.F("assertNotThrows", function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, "function" == typeof e, "Argument passed to assertNotThrows is not a function");
  try {
    return e();
  } catch (f) {
    d = (d ? d + "\n" : "") + "A non expected exception was thrown from function passed to assertNotThrows", l.i.l.nd(d, f.stack || f.stacktrace || f.toString());
  }
});
l.F("assertTrue", C);
l.F("assertFalse", function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, l.bd(e), "Bad argument to assertFalse(boolean)");
  _assert(d, !e, "Call to assertFalse(boolean) with true");
});
l.F("assertEquals", D);
l.F("assertNotEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(2, 2, arguments);
  _assert(z(2, arguments), A(1, 2, arguments) !== e, "Expected not to be " + _displayStringForValue(e));
});
l.F("assertNull", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments);
  _assert(z(1, arguments), null === d, l.i.l.eb(null, d));
});
l.F("assertNotNull", E);
l.F("assertUndefined", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments);
  _assert(z(1, arguments), void 0 === d, l.i.l.eb(void 0, d));
});
l.F("assertNotUndefined", F);
l.F("assertNotNullNorUndefined", function(a, c) {
  _validateArguments(1, arguments);
  E.apply(null, arguments);
  F.apply(null, arguments);
});
l.F("assertNonEmptyString", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments);
  _assert(z(1, arguments), void 0 !== d && null !== d && "string" == typeof d && "" !== d, "Expected non-empty string but was " + _displayStringForValue(d));
});
l.F("assertNaN", function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), isNaN(A(1, 1, arguments)), "Expected NaN");
});
l.F("assertNotNaN", function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), !isNaN(A(1, 1, arguments)), "Expected not NaN");
});
l.F("assertObjectEquals", G);
l.F("assertObjectRoughlyEquals", function(a, c, d, e) {
  _validateArguments(3, arguments);
  var f = A(3, 3, arguments), g = z(3, arguments) ? z(3, arguments) : "", h = l.i.l.tb(A(1, 3, arguments), A(2, 3, arguments), function(a, c, d) {
    return (a = l.i.l.km[a]) ? a(c, d, f) ? l.i.l.Bd : l.i.l.eb(c, d) + " which was more than " + f + " away" : l.i.l.Ad;
  });
  _assert(g, !h, h);
});
l.F("assertObjectNotEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = z(2, arguments) ? z(2, arguments) : "", f = l.i.l.tb(A(1, 2, arguments), A(2, 2, arguments));
  _assert(e, f, "Objects should not be equal");
});
l.F("assertArrayEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments) ? z(2, arguments) : "", h = _trueTypeOf(e);
  _assert(g, "Array" == h, "Expected an array for assertArrayEquals but found a " + h);
  h = _trueTypeOf(f);
  _assert(g, "Array" == h, "Expected an array for assertArrayEquals but found a " + h);
  G(g, Array.prototype.concat.call(e), Array.prototype.concat.call(f));
});
l.F("assertElementsEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments) ? z(2, arguments) : "";
  if (e) {
    D("length mismatch: " + g, e.length, f.length);
    for (var h = 0;h < e.length;++h) {
      D("mismatch at index " + h + ": " + g, e[h], f[h]);
    }
  } else {
    B(g, !f);
  }
});
l.F("assertElementsRoughlyEqual", function(a, c, d, e) {
  _validateArguments(3, arguments);
  var f = A(1, 3, arguments), g = A(2, 3, arguments), h = A(3, 3, arguments), k = z(3, arguments) ? z(3, arguments) : "";
  if (f) {
    D("length mismatch: " + k, f.length, g.length);
    for (var n = 0;n < f.length;++n) {
      H(k, f[n], g[n], h);
    }
  } else {
    B(k, !g);
  }
});
l.F("assertSameElements", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments);
  C("Bad arguments to assertSameElements(opt_message, expected: ArrayLike, actual: ArrayLike)", l.W(e) && l.W(f));
  e = l.i.l.$e(e);
  f = l.i.l.$e(f);
  _assert(g, e.length == f.length, "Expected " + e.length + " elements: [" + e + "], got " + f.length + " elements: [" + f + "]");
  for (var h = l.i.l.$e(e), k = 0;k < f.length;k++) {
    var n = l.i.l.Qg(h, f[k]);
    _assert(g, -1 != n, "Expected [" + e + "], got [" + f + "]");
    h.splice(n, 1);
  }
});
l.F("assertEvaluatesToTrue", function(a, c) {
  _validateArguments(1, arguments);
  A(1, 1, arguments) || _assert(z(1, arguments), !1, "Expected to evaluate to true");
});
l.F("assertEvaluatesToFalse", function(a, c) {
  _validateArguments(1, arguments);
  A(1, 1, arguments) && _assert(z(1, arguments), !1, "Expected to evaluate to false");
});
l.F("assertHTMLEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(2, 2, arguments), f = J(A(1, 2, arguments)), e = J(e);
  _assert(z(2, arguments), f === e, l.i.l.eb(f, e));
});
l.F("assertHashEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments), h;
  for (h in e) {
    _assert(g, h in f, "Expected hash had key " + h + " that was not found"), _assert(g, e[h] == f[h], "Value for key " + h + " mismatch - expected = " + e[h] + ", actual = " + f[h]);
  }
  for (h in f) {
    _assert(g, h in e, "Actual hash had key " + h + " that was not expected");
  }
});
l.F("assertRoughlyEquals", H);
l.F("assertContains", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  _assert(z(2, arguments), l.i.l.gg(f, e), "Expected '" + f + "' to contain '" + e + "'");
});
l.F("assertNotContains", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  _assert(z(2, arguments), !l.i.l.gg(f, e), "Expected '" + f + "' not to contain '" + e + "'");
});
l.F("assertRegExp", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  "string" == typeof e && (e = new RegExp(e));
  _assert(z(2, arguments), e.test(f), "Expected '" + f + "' to match RegExp " + e.toString());
});
chrome.cast.a.Dd = {UNKNOWN:"unknown", STATE_CHANGED:"state_changed", GAME_MESSAGE_RECEIVED:"game_message_received"};
l.w(chrome.cast.a, "GameManagerEventType", chrome.cast.a.Dd);
chrome.cast.a.yi = function() {
};
l.w(chrome.cast.a, "GameManagerEvent", chrome.cast.a.yi);
chrome.cast.a.Af = function(a, c) {
  this.type = chrome.cast.a.Dd.STATE_CHANGED;
  this.currentState = a;
  this.previousState = c;
};
l.w(chrome.cast.a, "GameManagerStateChangedEvent", chrome.cast.a.Af);
chrome.cast.a.xf = function(a, c) {
  this.type = chrome.cast.a.Dd.GAME_MESSAGE_RECEIVED;
  this.playerId = a;
  this.gameMessage = c;
};
l.w(chrome.cast.a, "GameManagerGameMessageReceivedEvent", chrome.cast.a.xf);
chrome.cast.a.yf = function(a) {
  this.gameManagerClient = a;
};
l.w(chrome.cast.a, "GameManagerInstanceResult", chrome.cast.a.yf);
chrome.cast.a.v = function(a, c, d, e, f, g, h) {
  this.Xf = a;
  this.th = c;
  this.Ge = d;
  this.ke = e;
  this.ie = f;
  this.je = g;
  this.zb = new l.A.Map;
  for (a = 0;a < h.length;a++) {
    c = h[a], this.zb.set(c.gb(), c);
  }
};
l.w(chrome.cast.a, "GameManagerState", chrome.cast.a.v);
chrome.cast.a.v.prototype.Ag = function() {
  return this.Xf;
};
l.w(chrome.cast.a.v.prototype, "getApplicationName", chrome.cast.a.v.prototype.Ag);
chrome.cast.a.v.prototype.Eg = function() {
  return this.th;
};
l.w(chrome.cast.a.v.prototype, "getMaxPlayers", chrome.cast.a.v.prototype.Eg);
chrome.cast.a.v.prototype.qe = function() {
  return this.Ge;
};
l.w(chrome.cast.a.v.prototype, "getLobbyState", chrome.cast.a.v.prototype.qe);
chrome.cast.a.v.prototype.ne = function() {
  return this.ke;
};
l.w(chrome.cast.a.v.prototype, "getGameplayState", chrome.cast.a.v.prototype.ne);
chrome.cast.a.v.prototype.le = function() {
  return this.ie;
};
l.w(chrome.cast.a.v.prototype, "getGameData", chrome.cast.a.v.prototype.le);
chrome.cast.a.v.prototype.me = function() {
  return this.je;
};
l.w(chrome.cast.a.v.prototype, "getGameStatusText", chrome.cast.a.v.prototype.me);
chrome.cast.a.v.prototype.se = function() {
  return this.zb.V();
};
l.w(chrome.cast.a.v.prototype, "getPlayers", chrome.cast.a.v.prototype.se);
chrome.cast.a.v.prototype.Ka = function(a) {
  return this.zb.get(a, null);
};
l.w(chrome.cast.a.v.prototype, "getPlayer", chrome.cast.a.v.prototype.Ka);
chrome.cast.a.v.prototype.Bk = function() {
  for (var a = [], c = this.zb.V(), d = 0;d < c.length;d++) {
    var e = c[d];
    e.xc() && a.push(e);
  }
  return a;
};
l.w(chrome.cast.a.v.prototype, "getControllablePlayers", chrome.cast.a.v.prototype.Bk);
chrome.cast.a.v.prototype.Ak = function() {
  for (var a = [], c = this.zb.V(), d = 0;d < c.length;d++) {
    var e = c[d];
    e.xe() && a.push(e);
  }
  return a;
};
l.w(chrome.cast.a.v.prototype, "getConnectedPlayers", chrome.cast.a.v.prototype.Ak);
chrome.cast.a.v.prototype.zk = function() {
  for (var a = [], c = this.zb.V(), d = 0;d < c.length;d++) {
    var e = c[d];
    e.xe() && e.xc() && a.push(e);
  }
  return a;
};
l.w(chrome.cast.a.v.prototype, "getConnectedControllablePlayers", chrome.cast.a.v.prototype.zk);
chrome.cast.a.v.prototype.Nk = function(a) {
  for (var c = [], d = this.zb.V(), e = 0;e < d.length;e++) {
    var f = d[e];
    f.sc() == a && c.push(f);
  }
  return c;
};
l.w(chrome.cast.a.v.prototype, "getPlayersInState", chrome.cast.a.v.prototype.Nk);
chrome.cast.a.v.prototype.bl = function(a) {
  return this.Ge != a.qe();
};
l.w(chrome.cast.a.v.prototype, "hasLobbyStateChanged", chrome.cast.a.v.prototype.bl);
chrome.cast.a.v.prototype.al = function(a) {
  return this.ke != a.ne();
};
l.w(chrome.cast.a.v.prototype, "hasGameplayStateChanged", chrome.cast.a.v.prototype.al);
chrome.cast.a.v.prototype.Zk = function(a) {
  return null != l.i.l.tb(this.ie, a.le());
};
l.w(chrome.cast.a.v.prototype, "hasGameDataChanged", chrome.cast.a.v.prototype.Zk);
chrome.cast.a.v.prototype.$k = function(a) {
  return this.je != a.me();
};
l.w(chrome.cast.a.v.prototype, "hasGameStatusTextChanged", chrome.cast.a.v.prototype.$k);
chrome.cast.a.v.prototype.dl = function(a, c) {
  var d = this.Ka(a), e = c.Ka(a);
  return null == d && null == e ? !1 : null != d && null != e ? !d.pa(e) : !0;
};
l.w(chrome.cast.a.v.prototype, "hasPlayerChanged", chrome.cast.a.v.prototype.dl);
chrome.cast.a.v.prototype.fl = function(a, c) {
  var d = this.Ka(a), e = c.Ka(a);
  return null == d && null == e ? !1 : null != d && null != e ? d.sc() != e.sc() : !0;
};
l.w(chrome.cast.a.v.prototype, "hasPlayerStateChanged", chrome.cast.a.v.prototype.fl);
chrome.cast.a.v.prototype.el = function(a, c) {
  var d = this.Ka(a), e = c.Ka(a);
  return null == d && null == e ? !1 : null != d && null != e ? null != l.i.l.tb(d.Xc(), e.Xc()) : !0;
};
l.w(chrome.cast.a.v.prototype, "hasPlayerDataChanged", chrome.cast.a.v.prototype.el);
chrome.cast.a.v.prototype.Dg = function(a) {
  for (var c = [], d = this.se(), e = 0;e < d.length;e++) {
    var f = d[e], g = a.Ka(f.gb());
    null != g && f.pa(g) || c.push(f.gb());
  }
  a = a.se();
  for (e = 0;e < a.length;e++) {
    g = a[e], f = this.Ka(g.gb()), null != f || l.c.contains(c, g.gb()) || c.push(g.gb());
  }
  return c;
};
l.w(chrome.cast.a.v.prototype, "getListOfChangedPlayers", chrome.cast.a.v.prototype.Dg);
chrome.cast.a.v.prototype.pa = function(a) {
  return this.Xf == a.Ag() && this.th == a.Eg() && this.Ge == a.qe() && this.ke == a.ne() && this.je == a.me() && 0 == this.Dg(a).length && !l.i.l.tb(this.ie, a.le());
};
l.w(chrome.cast.a.v.prototype, "equals", chrome.cast.a.v.prototype.pa);
chrome.cast.a.Y = function(a, c, d, e) {
  this.Ih = a;
  this.Tb = c;
  this.Hh = d;
  this.Yg = e;
};
l.w(chrome.cast.a, "PlayerInfo", chrome.cast.a.Y);
chrome.cast.a.Y.prototype.gb = function() {
  return this.Ih;
};
l.w(chrome.cast.a.Y.prototype, "getPlayerId", chrome.cast.a.Y.prototype.gb);
chrome.cast.a.Y.prototype.sc = function() {
  return this.Tb;
};
l.w(chrome.cast.a.Y.prototype, "getPlayerState", chrome.cast.a.Y.prototype.sc);
chrome.cast.a.Y.prototype.Xc = function() {
  return this.Hh;
};
l.w(chrome.cast.a.Y.prototype, "getPlayerData", chrome.cast.a.Y.prototype.Xc);
chrome.cast.a.Y.prototype.xc = function() {
  return this.Yg;
};
l.w(chrome.cast.a.Y.prototype, "isControllable", chrome.cast.a.Y.prototype.xc);
chrome.cast.a.Y.prototype.xe = function() {
  return this.Tb == chrome.cast.a.PlayerState.IDLE || this.Tb == chrome.cast.a.PlayerState.AVAILABLE || this.Tb == chrome.cast.a.PlayerState.PLAYING || this.Tb == chrome.cast.a.PlayerState.READY;
};
l.w(chrome.cast.a.Y.prototype, "isConnected", chrome.cast.a.Y.prototype.xe);
chrome.cast.a.Y.prototype.pa = function(a) {
  return this.Ih == a.gb() && this.Tb == a.sc() && this.Yg == a.xc() && !l.i.l.tb(this.Hh, a.Xc());
};
l.w(chrome.cast.a.Y.prototype, "equals", chrome.cast.a.Y.prototype.pa);
chrome.cast.a.u = function(a) {
  this.ga = new chrome.cast.a.D.ab(a);
  this.oc = new l.events.EventTarget;
  this.Bc = this.Kb = this.Vc = null;
  this.$g = this.Rg = !1;
  this.Mj = l.bind(this.dm, this);
  this.Nj = l.bind(this.cn, this);
  this.Oc = this.Nc = null;
  this.ga.Qm(this.Mj, this.Nj);
};
l.w(chrome.cast.a, "GameManagerClient", chrome.cast.a.u);
chrome.cast.a.u.Hk = function(a, c, d) {
  (new chrome.cast.a.u(a)).jl(c, d);
};
l.w(chrome.cast.a.u, "getInstanceFor", chrome.cast.a.u.Hk);
chrome.cast.a.u.prototype.jl = function(a, c) {
  if (this.Rg) {
    throw Error("Attempted to initialize the GameManagerClient more than once.");
  }
  if (this.isDisposed()) {
    throw Error("Attempted to initialize the GameManagerClient after it was disposed.");
  }
  this.Rg = !0;
  var d = this;
  this.ga.xm(function() {
    a(new chrome.cast.a.yf(d));
  }, c);
};
chrome.cast.a.u.prototype.Ua = function() {
  this.isDisposed() || (this.ga.Ua(), this.oc.Ua(), this.ga = null, this.$g = !0);
};
l.w(chrome.cast.a.u.prototype, "dispose", chrome.cast.a.u.prototype.Ua);
chrome.cast.a.u.prototype.isDisposed = function() {
  return this.$g;
};
l.w(chrome.cast.a.u.prototype, "isDisposed", chrome.cast.a.u.prototype.isDisposed);
chrome.cast.a.u.prototype.Am = function(a, c, d) {
  var e = this.ga.Ea();
  this.Na(e, chrome.cast.a.PlayerState.AVAILABLE, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerAvailableRequest", chrome.cast.a.u.prototype.Am);
chrome.cast.a.u.prototype.Bm = function(a, c, d, e) {
  this.Na(a, chrome.cast.a.PlayerState.AVAILABLE, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerAvailableRequestWithPlayerId", chrome.cast.a.u.prototype.Bm);
chrome.cast.a.u.prototype.Im = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Na(e, chrome.cast.a.PlayerState.READY, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerReadyRequest", chrome.cast.a.u.prototype.Im);
chrome.cast.a.u.prototype.Jm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Na(a, chrome.cast.a.PlayerState.READY, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerReadyRequestWithPlayerId", chrome.cast.a.u.prototype.Jm);
chrome.cast.a.u.prototype.Cm = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Na(e, chrome.cast.a.PlayerState.IDLE, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerIdleRequest", chrome.cast.a.u.prototype.Cm);
chrome.cast.a.u.prototype.Dm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Na(a, chrome.cast.a.PlayerState.IDLE, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerIdleRequestWithPlayerId", chrome.cast.a.u.prototype.Dm);
chrome.cast.a.u.prototype.Em = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Na(e, chrome.cast.a.PlayerState.PLAYING, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerPlayingRequest", chrome.cast.a.u.prototype.Em);
chrome.cast.a.u.prototype.Fm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Na(a, chrome.cast.a.PlayerState.PLAYING, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerPlayingRequestWithPlayerId", chrome.cast.a.u.prototype.Fm);
chrome.cast.a.u.prototype.Gm = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Na(e, chrome.cast.a.PlayerState.QUIT, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerQuitRequest", chrome.cast.a.u.prototype.Gm);
chrome.cast.a.u.prototype.Hm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Na(a, chrome.cast.a.PlayerState.QUIT, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerQuitRequestWithPlayerId", chrome.cast.a.u.prototype.Hm);
chrome.cast.a.u.prototype.Na = function(a, c, d, e, f) {
  this.gc();
  c = chrome.cast.a.D.oa.Fk(c);
  this.ga.Ue(a, c, d, e, f);
};
chrome.cast.a.u.prototype.zm = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send game request - no last used player ID found.");
  }
  this.Qh(e, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendGameRequest", chrome.cast.a.u.prototype.zm);
chrome.cast.a.u.prototype.Qh = function(a, c, d, e) {
  this.gc();
  this.ga.Ue(a, chrome.cast.a.D.oa.wi, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendGameRequestWithPlayerId", chrome.cast.a.u.prototype.Qh);
chrome.cast.a.u.prototype.ym = function(a) {
  var c = this.ga.Ea();
  if (!c) {
    throw Error("Cannot send game message - no last used player ID found.");
  }
  this.Ph(c, a);
};
l.w(chrome.cast.a.u.prototype, "sendGameMessage", chrome.cast.a.u.prototype.ym);
chrome.cast.a.u.prototype.Ph = function(a, c) {
  this.gc();
  this.ga.Ue(a, chrome.cast.a.D.oa.GAME_MESSAGE, c, null, null);
};
l.w(chrome.cast.a.u.prototype, "sendGameMessageWithPlayerId", chrome.cast.a.u.prototype.Ph);
chrome.cast.a.u.prototype.addEventListener = function(a, c) {
  this.oc.listen(a, c);
};
l.w(chrome.cast.a.u.prototype, "addEventListener", chrome.cast.a.u.prototype.addEventListener);
chrome.cast.a.u.prototype.removeEventListener = function(a, c) {
  this.oc.Yb(a, c);
};
l.w(chrome.cast.a.u.prototype, "removeEventListener", chrome.cast.a.u.prototype.removeEventListener);
chrome.cast.a.u.prototype.Ck = function() {
  this.gc();
  return this.Kb;
};
l.w(chrome.cast.a.u.prototype, "getCurrentState", chrome.cast.a.u.prototype.Ck);
chrome.cast.a.u.prototype.Ea = function() {
  this.gc();
  return this.ga.Ea();
};
l.w(chrome.cast.a.u.prototype, "getLastUsedPlayerId", chrome.cast.a.u.prototype.Ea);
b = chrome.cast.a.u.prototype;
b.dm = function(a) {
  if (a.statusCode != chrome.cast.a.D.Ha.Td) {
    throw Error("Expecting a successful response message but got an error for request ID " + a.requestId);
  }
  if (this.Ae() || a.gameManagerConfig) {
    if (a.gameManagerConfig && (this.Vc = a.gameManagerConfig), this.Ae()) {
      this.Bc = this.Kb;
      for (var c = [], d = 0;d < a.players.length;d++) {
        var e = a.players[d], f = e.playerId;
        c.push(new chrome.cast.a.Y(f, e.playerState, e.playerData, this.ga.yl(f)));
      }
      this.Kb = new chrome.cast.a.v(this.Vc.applicationName, this.Vc.maxPlayers, a.lobbyState, a.gameplayState, a.gameData, a.gameStatusText, c);
      c = this.Kb.Ka(a.playerId);
      null != c && c.xc() && a.type == chrome.cast.a.D.cc.GAME_MESSAGE && (this.Nc = a.playerId, this.Oc = a.extraMessageData);
    }
  }
};
b.cn = function() {
  null == this.Bc || this.Kb.pa(this.Bc) || this.ik(this.Kb, this.Bc);
  null != this.Nc && null != this.Oc && this.hk(this.Nc, this.Oc);
  this.Oc = this.Nc = this.Bc = null;
};
b.Ae = function() {
  return null != this.Vc;
};
b.ik = function(a, c) {
  this.oc.dispatchEvent(new chrome.cast.a.Af(a, c));
};
b.hk = function(a, c) {
  this.oc.dispatchEvent(new chrome.cast.a.xf(a, c));
};
b.gc = function() {
  if (!this.Ae()) {
    throw Error("Attempted to perform an operation on the GameManagerClient before it was initialized.");
  }
  if (this.isDisposed()) {
    throw Error("Attempted to perform an operation on the GameManagerClient after it was disposed.");
  }
};
chrome.cast.a.D.xi = function() {
  this.applicationName = "[APPLICATION_NAME_NOT_SET]";
  this.maxPlayers = -1;
  this.version = "[INVALID_VERSION]";
};
l.F("chrome.cast.games.internal.GameManagerConfig", chrome.cast.a.D.xi);
chrome.cast.a.D.bj = function() {
  this.playerId = "";
  this.playerState = chrome.cast.a.PlayerState.UNKNOWN;
  this.playerData = null;
};
l.F("chrome.cast.games.internal.PlayerInfoMessageComponent", chrome.cast.a.D.bj);
})();
