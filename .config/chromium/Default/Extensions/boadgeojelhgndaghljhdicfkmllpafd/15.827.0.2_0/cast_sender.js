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
