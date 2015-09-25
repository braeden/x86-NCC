var chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var a = a || {};
a.global = this;
a.B = function(b) {
  return void 0 !== b;
};
a.S = function(b, c, d) {
  b = b.split(".");
  d = d || a.global;
  b[0] in d || !d.execScript || d.execScript("var " + b[0]);
  for (var e;b.length && (e = b.shift());) {
    !b.length && a.B(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
a.Td = function(b, c) {
  a.S(b, c);
};
a.w = !0;
a.Cd = "en";
a.fc = !0;
a.Zb = !1;
a.Sa = !a.w;
a.ca = !1;
a.pe = function(b) {
  a.qa(b);
};
a.qa = function(b, c) {
  a.S(b, c);
};
a.sc = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
a.module = function(b) {
  if (!a.isString(b) || !b || -1 == b.search(a.sc)) {
    throw Error("Invalid module identifier");
  }
  if (!a.Oc()) {
    throw Error("Module " + b + " has been loaded incorrectly.");
  }
  if (a.h.X) {
    throw Error("goog.module may only be called once per module.");
  }
  a.h.X = b;
};
a.module.get = function(b) {
  return a.module.Fc(b);
};
a.module.Fc = function() {
};
a.h = null;
a.Oc = function() {
  return null != a.h;
};
a.module.sa = function() {
  a.h.sa = !0;
};
a.te = function(b) {
  if (a.Sa) {
    throw b = b || "", Error("Importing test-only code into non-debug environment" + (b ? ": " + b : "."));
  }
};
a.Ud = function() {
};
a.$d = function(b, c) {
  for (var d = b.split("."), e = c || a.global, g;g = d.shift();) {
    if (a.Nc(e[g])) {
      e = e[g];
    } else {
      return null;
    }
  }
  return e;
};
a.ae = function(b, c) {
  var d = c || a.global, e;
  for (e in b) {
    d[e] = b[e];
  }
};
a.Rd = function(b, c, d, e) {
  if (a.aa) {
    var g;
    b = b.replace(/\\/g, "/");
    for (var h = a.g, k = 0;g = c[k];k++) {
      h.C[g] = b, h.Y[b] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      b in h.requires || (h.requires[b] = {}), h.requires[b][c] = !0;
    }
  }
};
a.ve = !1;
a.sd = !0;
a.ie = function(b) {
  a.global.console && a.global.console.error(b);
};
a.require = function() {
};
a.s = "";
a.me = function() {
};
a.Qd = function() {
  throw Error("unimplemented abstract method");
};
a.Sd = function(b) {
  b.Xd = function() {
    if (b.wa) {
      return b.wa;
    }
    a.w && (a.xa[a.xa.length] = b);
    return b.wa = new b;
  };
};
a.xa = [];
a.hb = !0;
a.Ub = a.w;
a.Tc = {};
a.aa = !1;
a.aa && (a.g = {Y:{}, C:{}, requires:{}, Ha:{}, L:{}, F:{}}, a.va = function() {
  var b = a.global.document;
  return "undefined" != typeof b && "write" in b;
}, a.Ec = function() {
  if (a.B(a.global.Ma)) {
    a.s = a.global.Ma;
  } else {
    if (a.va()) {
      for (var b = a.global.document.getElementsByTagName("SCRIPT"), c = b.length - 1;0 <= c;--c) {
        var d = b[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          a.s = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, a.W = function(b, c) {
  (a.global.pd || a.kd)(b, c) && (a.g.L[b] = !0);
}, a.eb = !(a.global.atob || !a.global.document || !a.global.document.all), a.Lc = function(b) {
  a.W("", 'goog.retrieveAndExecModule_("' + b + '");') && (a.g.L[b] = !0);
}, a.Z = [], a.we = function(b, c) {
  return a.hb && a.B(a.global.JSON) ? "goog.loadModule(" + a.global.JSON.stringify(c + "\n//# sourceURL=" + b + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + b + "\n";
}, a.Sc = function() {
  var b = a.Z.length;
  if (0 < b) {
    var c = a.Z;
    a.Z = [];
    for (var d = 0;d < b;d++) {
      a.Aa(c[d]);
    }
  }
}, a.je = function(b) {
  a.ya(b) && a.uc(b) && a.Aa(a.s + a.V(b));
}, a.ya = function(b) {
  return (b = a.V(b)) && a.g.Y[b] ? a.s + b in a.g.F : !1;
}, a.uc = function(b) {
  if ((b = a.V(b)) && b in a.g.requires) {
    for (var c in a.g.requires[b]) {
      if (!a.Pc(c) && !a.ya(c)) {
        return !1;
      }
    }
  }
  return !0;
}, a.Aa = function(b) {
  if (b in a.g.F) {
    var c = a.g.F[b];
    delete a.g.F[b];
    a.Jc(c);
  }
}, a.he = function(b) {
  var c = a.h;
  try {
    a.h = {X:void 0};
    var d;
    if (a.isFunction(b)) {
      d = b.call(a.global, {});
    } else {
      if (a.isString(b)) {
        d = a.Rc.call(a.global, b);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = a.h.X;
    if (!a.isString(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    a.h.sa ? a.qa(e, d) : a.Ub && Object.seal && Object.seal(d);
    a.Tc[e] = d;
  } finally {
    a.h = c;
  }
}, a.Rc = function(b) {
  eval(b);
  return {};
}, a.jd = function(b) {
  a.global.document.write('<script type="text/javascript" src="' + b + '">\x3c/script>');
}, a.vc = function(b) {
  var c = a.global.document, d = c.createElement("script");
  d.type = "text/javascript";
  d.src = b;
  d.defer = !1;
  d.async = !1;
  c.head.appendChild(d);
}, a.kd = function(b, c) {
  if (a.va()) {
    var d = a.global.document;
    if (!a.ca && "complete" == d.readyState) {
      if (/\bdeps.js$/.test(b)) {
        return !1;
      }
      throw Error('Cannot write "' + b + '" after document load');
    }
    var e = a.eb;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++a.za + ")' ", d.write('<script type="text/javascript" src="' + b + '"' + e + ">\x3c/script>")) : a.ca ? a.vc(b) : a.jd(b) : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return !0;
  }
  return !1;
}, a.za = 0, a.ne = function(b, c) {
  "complete" == b.readyState && a.za == c && a.Sc();
  return !0;
}, a.xe = function(b) {
  function c(b) {
    if (!(b in g.L || b in g.Ha)) {
      g.Ha[b] = !0;
      if (b in g.requires) {
        for (var h in g.requires[b]) {
          if (!a.Pc(h)) {
            if (h in g.C) {
              c(g.C[h]);
            } else {
              throw Error("Undefined nameToPath for " + h);
            }
          }
        }
      }
      b in e || (e[b] = !0, d.push(b));
    }
  }
  var d = [], e = {}, g = a.g;
  c(b);
  for (b = 0;b < d.length;b++) {
    var h = d[b];
    a.g.L[h] = !0;
  }
  var k = a.h;
  a.h = null;
  for (b = 0;b < d.length;b++) {
    if (h = d[b]) {
      g.Y[h] ? a.Lc(a.s + h) : a.W(a.s + h);
    } else {
      throw a.h = k, Error("Undefined script input");
    }
  }
  a.h = k;
}, a.V = function(b) {
  return b in a.g.C ? a.g.C[b] : null;
}, a.Ec(), a.global.qd || a.W(a.s + "deps.js"));
a.le = function(b) {
  b = b.split("/");
  for (var c = 0;c < b.length;) {
    "." == b[c] ? b.splice(c, 1) : c && ".." == b[c] && b[c - 1] && ".." != b[c - 1] ? b.splice(--c, 2) : c++;
  }
  return b.join("/");
};
a.ge = function(b) {
  if (a.global.Na) {
    return a.global.Na(b);
  }
  var c = new a.global.XMLHttpRequest;
  c.open("get", b, !1);
  c.send();
  return c.responseText;
};
a.re = function() {
};
a.K = function(b) {
  var c = typeof b;
  if ("object" == c) {
    if (b) {
      if (b instanceof Array) {
        return "array";
      }
      if (b instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(b);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof b.length && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof b.call) {
      return "object";
    }
  }
  return c;
};
a.fe = function(b) {
  return null === b;
};
a.Nc = function(b) {
  return null != b;
};
a.isArray = function(b) {
  return "array" == a.K(b);
};
a.ce = function(b) {
  var c = a.K(b);
  return "array" == c || "object" == c && "number" == typeof b.length;
};
a.ee = function(b) {
  return a.isObject(b) && "function" == typeof b.getFullYear;
};
a.isString = function(b) {
  return "string" == typeof b;
};
a.de = function(b) {
  return "boolean" == typeof b;
};
a.isNumber = function(b) {
  return "number" == typeof b;
};
a.isFunction = function(b) {
  return "function" == a.K(b);
};
a.isObject = function(b) {
  var c = typeof b;
  return "object" == c && null != b || "function" == c;
};
a.Hc = function(b) {
  return b[a.o] || (b[a.o] = ++a.hd);
};
a.be = function(b) {
  return !!b[a.o];
};
a.$c = function(b) {
  "removeAttribute" in b && b.removeAttribute(a.o);
  try {
    delete b[a.o];
  } catch (c) {
  }
};
a.o = "closure_uid_" + (1E9 * Math.random() >>> 0);
a.hd = 0;
a.Wd = a.Hc;
a.qe = a.$c;
a.zc = function(b) {
  var c = a.K(b);
  if ("object" == c || "array" == c) {
    if (b.clone) {
      return b.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in b) {
      c[d] = a.zc(b[d]);
    }
    return c;
  }
  return b;
};
a.yc = function(b, c, d) {
  return b.call.apply(b.bind, arguments);
};
a.xc = function(b, c, d) {
  if (!b) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return b.apply(c, d);
    };
  }
  return function() {
    return b.apply(c, arguments);
  };
};
a.bind = function(b, c, d) {
  a.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? a.yc : a.xc;
  return a.bind.apply(null, arguments);
};
a.oe = function(b, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return b.apply(this, c);
  };
};
a.ke = function(b, c) {
  for (var d in c) {
    b[d] = c[d];
  }
};
a.now = a.fc && Date.now || function() {
  return +new Date;
};
a.Jc = function(b) {
  if (a.global.execScript) {
    a.global.execScript(b, "JavaScript");
  } else {
    if (a.global.eval) {
      if (null == a.G) {
        if (a.global.eval("var _evalTest_ = 1;"), "undefined" != typeof a.global._evalTest_) {
          try {
            delete a.global._evalTest_;
          } catch (c) {
          }
          a.G = !0;
        } else {
          a.G = !1;
        }
      }
      if (a.G) {
        a.global.eval(b);
      } else {
        var d = a.global.document, e = d.createElement("SCRIPT");
        e.type = "text/javascript";
        e.defer = !1;
        e.appendChild(d.createTextNode(b));
        d.body.appendChild(e);
        d.body.removeChild(e);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
a.G = null;
a.Vd = function(b, c) {
  var d = function(b) {
    return a.ra[b] || b;
  }, e = function(b) {
    b = b.split("-");
    for (var c = [], e = 0;e < b.length;e++) {
      c.push(d(b[e]));
    }
    return c.join("-");
  }, e = a.ra ? "BY_WHOLE" == a.Cc ? d : e : function(b) {
    return b;
  };
  return c ? b + "-" + e(c) : e(b);
};
a.se = function(b, c) {
  a.ra = b;
  a.Cc = c;
};
a.Yd = function(b, c) {
  c && (b = b.replace(/\{\$([^}]+)}/g, function(b, e) {
    return e in c ? c[e] : b;
  }));
  return b;
};
a.Zd = function(b) {
  return b;
};
a.a = function(b, c, d) {
  a.S(b, c, d);
};
a.f = function(b, c, d) {
  b[c] = d;
};
a.Mc = function(b, c) {
  function d() {
  }
  d.prototype = c.prototype;
  b.J = c.prototype;
  b.prototype = new d;
  b.prototype.constructor = b;
  b.wc = function(b, d, h) {
    for (var k = Array(arguments.length - 2), l = 2;l < arguments.length;l++) {
      k[l - 2] = arguments[l];
    }
    return c.prototype[d].apply(b, k);
  };
};
a.wc = function(b, c, d) {
  var e = arguments.callee.caller;
  if (a.Zb || a.w && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.J) {
    for (var g = Array(arguments.length - 1), h = 1;h < arguments.length;h++) {
      g[h - 1] = arguments[h];
    }
    return e.J.constructor.apply(b, g);
  }
  g = Array(arguments.length - 2);
  for (h = 2;h < arguments.length;h++) {
    g[h - 2] = arguments[h];
  }
  for (var h = !1, k = b.constructor;k;k = k.J && k.J.constructor) {
    if (k.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return k.prototype[c].apply(b, g);
      }
    }
  }
  if (b[c] === e) {
    return b.constructor.prototype[c].apply(b, g);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
a.scope = function(b) {
  b.call(a.global);
};
a.Fd = !1;
a.l = function(b, c) {
  var d = c.constructor, e = c.fd;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = a.l.Bc(d, b);
  b && a.Mc(d, b);
  delete c.constructor;
  delete c.fd;
  a.l.pa(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : a.l.pa(d, e));
  return d;
};
a.l.Tb = a.w;
a.l.Bc = function(b, c) {
  if (a.l.Tb && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[a.pc]) {
      return b;
    }
    var d = function() {
      var c = b.apply(this, arguments) || this;
      c[a.o] = c[a.o];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return b;
};
a.l.ia = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
a.l.pa = function(b, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
  }
  for (var e = 0;e < a.l.ia.length;e++) {
    d = a.l.ia[e], Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
  }
};
a.ue = function() {
};
a.pc = "goog_defineClass_legacy_unsealable";
chrome.cast.$ = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
a.a("chrome.cast.AutoJoinPolicy", chrome.cast.$);
chrome.cast.ba = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
a.a("chrome.cast.DefaultActionPolicy", chrome.cast.ba);
chrome.cast.M = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
a.a("chrome.cast.Capability", chrome.cast.M);
chrome.cast.da = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
a.a("chrome.cast.ErrorCode", chrome.cast.da);
chrome.cast.Qb = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
a.a("chrome.cast.ReceiverAvailability", chrome.cast.Qb);
chrome.cast.bc = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
a.a("chrome.cast.SenderPlatform", chrome.cast.bc);
chrome.cast.ka = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
a.a("chrome.cast.ReceiverType", chrome.cast.ka);
chrome.cast.Ua = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
a.a("chrome.cast.DialAppState", chrome.cast.Ua);
chrome.cast.Pb = {CAST:"cast", STOP:"stop"};
a.a("chrome.cast.ReceiverAction", chrome.cast.Pb);
chrome.cast.ma = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
a.a("chrome.cast.SessionStatus", chrome.cast.ma);
chrome.cast.VERSION = [1, 2];
a.a("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(b, c, d) {
  this.code = b;
  this.description = c || null;
  this.details = d || null;
};
a.a("chrome.cast.Error", chrome.cast.Error);
chrome.cast.ac = function(b) {
  this.platform = b;
  this.packageId = this.url = null;
};
a.a("chrome.cast.SenderApplication", chrome.cast.ac);
chrome.cast.Image = function(b) {
  this.url = b;
  this.width = this.height = null;
};
a.a("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Volume = function(b, c) {
  this.level = a.B(b) ? b : null;
  this.muted = a.B(c) ? c : null;
};
a.a("chrome.cast.Volume", chrome.cast.Volume);
var f = {b:{xd:"LAUNCH", la:"STOP", Yb:"SET_VOLUME", $a:"GET_STATUS", Id:"RECEIVER_STATUS", Od:"CONNECT", Pd:"CLOSE", td:"GET_APP_AVAILABILITY", kb:"LOAD", lb:"PAUSE", rb:"SEEK", mb:"PLAY", ha:"STOP_MEDIA", fa:"MEDIA_GET_STATUS", ga:"MEDIA_SET_VOLUME", jb:"EDIT_TRACKS_INFO", ob:"QUEUE_LOAD", nb:"QUEUE_INSERT", O:"QUEUE_UPDATE", pb:"QUEUE_REMOVE", qb:"QUEUE_REORDER", ud:"INVALID_PLAYER_STATE", Bd:"LOAD_FAILED", Ad:"LOAD_CANCELLED", vd:"INVALID_REQUEST", Ed:"MEDIA_STATUS", yd:"LAUNCH_ERROR", PING:"PING", 
Gd:"PONG"}, P:{}};
f.P[f.b.ha] = f.b.la;
f.P[f.b.ga] = f.b.Yb;
f.P[f.b.fa] = f.b.$a;
f.ld = function(b, c, d) {
  this.sessionId = b;
  this.namespaceName = c;
  this.message = d;
};
f.Nd = function(b) {
  this.type = f.b.la;
  this.requestId = null;
  this.sessionId = b || null;
};
chrome.cast.media.ub = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
a.a("chrome.cast.media.MediaCommand", chrome.cast.media.ub);
chrome.cast.media.j = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
a.a("chrome.cast.media.MetadataType", chrome.cast.media.j);
chrome.cast.media.ja = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
a.a("chrome.cast.media.PlayerState", chrome.cast.media.ja);
chrome.cast.media.R = {OFF:"REPEAT_OFF", ALL:"REPEAT_ALL", SINGLE:"REPEAT_SINGLE", ALL_AND_SHUFFLE:"REPEAT_ALL_AND_SHUFFLE"};
a.a("chrome.cast.media.RepeatMode", chrome.cast.media.R);
chrome.cast.media.Sb = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
a.a("chrome.cast.media.ResumeState", chrome.cast.media.Sb);
chrome.cast.media.na = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
a.a("chrome.cast.media.StreamType", chrome.cast.media.na);
chrome.cast.media.fb = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
a.a("chrome.cast.media.IdleReason", chrome.cast.media.fb);
chrome.cast.media.nc = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
a.a("chrome.cast.media.TrackType", chrome.cast.media.nc);
chrome.cast.media.kc = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
a.a("chrome.cast.media.TextTrackType", chrome.cast.media.kc);
chrome.cast.media.gc = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
a.a("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.gc);
chrome.cast.media.lc = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
a.a("chrome.cast.media.TextTrackWindowType", chrome.cast.media.lc);
chrome.cast.media.hc = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
a.a("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.hc);
chrome.cast.media.ic = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
a.a("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.ic);
chrome.cast.media.bb = function() {
  this.type = f.b.fa;
  this.customData = null;
};
a.a("chrome.cast.media.GetStatusRequest", chrome.cast.media.bb);
chrome.cast.media.zb = function() {
  this.type = f.b.lb;
  this.customData = null;
};
a.a("chrome.cast.media.PauseRequest", chrome.cast.media.zb);
chrome.cast.media.Bb = function() {
  this.type = f.b.mb;
  this.customData = null;
};
a.a("chrome.cast.media.PlayRequest", chrome.cast.media.Bb);
chrome.cast.media.$b = function() {
  this.type = f.b.rb;
  this.customData = this.resumeState = this.currentTime = null;
};
a.a("chrome.cast.media.SeekRequest", chrome.cast.media.$b);
chrome.cast.media.dc = function() {
  this.type = f.b.ha;
  this.customData = null;
};
a.a("chrome.cast.media.StopRequest", chrome.cast.media.dc);
chrome.cast.media.tc = function(b) {
  this.type = f.b.ga;
  this.volume = b;
  this.customData = null;
};
a.a("chrome.cast.media.VolumeRequest", chrome.cast.media.tc);
chrome.cast.media.ib = function(b) {
  this.type = f.b.kb;
  this.sessionId = this.requestId = null;
  this.media = b;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
a.a("chrome.cast.media.LoadRequest", chrome.cast.media.ib);
chrome.cast.media.Za = function(b, c) {
  this.type = f.b.jb;
  this.requestId = null;
  this.activeTrackIds = b || null;
  this.textTrackStyle = c || null;
};
a.a("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Za);
chrome.cast.media.Gb = function(b) {
  this.type = f.b.ob;
  this.sessionId = this.requestId = null;
  this.items = b;
  this.startIndex = 0;
  this.repeatMode = chrome.cast.media.R.OFF;
  this.customData = this.currentTime = null;
};
a.a("chrome.cast.media.QueueLoadRequest", chrome.cast.media.Gb);
chrome.cast.media.Db = function(b) {
  this.type = f.b.nb;
  this.sessionId = this.requestId = null;
  this.items = b;
  this.customData = this.currentTime = this.currentItemIndex = this.currentItemId = this.insertBefore = null;
};
a.a("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.Db);
chrome.cast.media.Cb = function(b) {
  this.item = b;
  this.customData = this.currentTime = this.insertBefore = null;
};
a.a("chrome.cast.media.QueueInsertAndPlayItemRequest", chrome.cast.media.Cb);
chrome.cast.media.Kb = function(b) {
  this.type = f.b.O;
  this.sessionId = this.requestId = null;
  this.items = b;
  this.customData = null;
};
a.a("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.Kb);
chrome.cast.media.Fb = function() {
  this.type = f.b.O;
  this.customData = this.currentTime = this.jump = this.currentItemId = this.sessionId = this.requestId = null;
};
a.a("chrome.cast.media.QueueJumpRequest", chrome.cast.media.Fb);
chrome.cast.media.Jb = function() {
  this.type = f.b.O;
  this.customData = this.repeatMode = this.sessionId = this.requestId = null;
};
a.a("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.Jb);
chrome.cast.media.Hb = function(b) {
  this.type = f.b.pb;
  this.sessionId = this.requestId = null;
  this.itemIds = b;
  this.customData = null;
};
a.a("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.Hb);
chrome.cast.media.Ib = function(b) {
  this.type = f.b.qb;
  this.sessionId = this.requestId = null;
  this.itemIds = b;
  this.customData = this.insertBefore = null;
};
a.a("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.Ib);
chrome.cast.media.ab = function() {
  this.metadataType = this.type = chrome.cast.media.j.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
a.a("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.ab);
chrome.cast.media.wb = function() {
  this.metadataType = this.type = chrome.cast.media.j.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
a.a("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.wb);
chrome.cast.media.oc = function() {
  this.metadataType = this.type = chrome.cast.media.j.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
a.a("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.oc);
chrome.cast.media.xb = function() {
  this.metadataType = this.type = chrome.cast.media.j.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
a.a("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.xb);
chrome.cast.media.Ab = function() {
  this.metadataType = this.type = chrome.cast.media.j.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
a.a("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.Ab);
chrome.cast.media.vb = function(b, c) {
  this.contentId = b;
  this.streamType = chrome.cast.media.na.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
a.a("chrome.cast.media.MediaInfo", chrome.cast.media.vb);
chrome.cast.media.Eb = function(b) {
  this.itemId = null;
  this.media = b;
  this.autoplay = !0;
  this.startTime = 0;
  this.playbackDuration = null;
  this.preloadTime = 0;
  this.customData = this.activeTrackIds = null;
};
a.a("chrome.cast.media.QueueItem", chrome.cast.media.Eb);
chrome.cast.media.tb = function(b, c) {
  this.sessionId = b;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.ja.IDLE;
  this.currentTime = 0;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Volume;
  this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
  this.repeatMode = chrome.cast.media.R.OFF;
};
a.a("chrome.cast.media.Media", chrome.cast.media.tb);
chrome.cast.media.Ra = "CC1AD845";
a.a("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Ra);
chrome.cast.media.timeout = {};
a.a("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
a.f(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.Gc = 0;
a.f(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.Gc);
chrome.cast.media.timeout.play = 0;
a.f(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
a.f(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
a.f(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
a.f(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.ed = 0;
a.f(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.ed);
chrome.cast.media.timeout.Dc = 0;
a.f(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.Dc);
chrome.cast.media.timeout.Zc = 0;
a.f(chrome.cast.media.timeout, "queue", chrome.cast.media.timeout.Zc);
chrome.cast.media.mc = function(b, c) {
  this.trackId = b;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
a.a("chrome.cast.media.Track", chrome.cast.media.mc);
chrome.cast.media.jc = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
a.a("chrome.cast.media.TextTrackStyle", chrome.cast.media.jc);
chrome.cast.La = function(b, c, d, e, g) {
  this.sessionRequest = b;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.$.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = g || chrome.cast.ba.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
a.a("chrome.cast.ApiConfig", chrome.cast.La);
chrome.cast.Xa = function(b, c) {
  this.appName = b;
  this.launchParameter = c || null;
};
a.a("chrome.cast.DialRequest", chrome.cast.Xa);
chrome.cast.Va = function(b, c, d) {
  this.receiver = b;
  this.appState = c;
  this.extraData = d || null;
};
a.a("chrome.cast.DialLaunchData", chrome.cast.Va);
chrome.cast.Wa = function(b, c) {
  this.doLaunch = b;
  this.launchParameter = c || null;
};
a.a("chrome.cast.DialLaunchResponse", chrome.cast.Wa);
chrome.cast.cc = function(b, c, d) {
  this.appId = b;
  this.capabilities = c || [chrome.cast.M.VIDEO_OUT, chrome.cast.M.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.Da;
  this.language = null;
};
a.a("chrome.cast.SessionRequest", chrome.cast.cc);
chrome.cast.Ob = function(b, c, d, e) {
  this.label = b;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.ka.CAST;
  this.ipAddress = this.displayStatus = this.isActiveInput = null;
};
a.a("chrome.cast.Receiver", chrome.cast.Ob);
chrome.cast.Rb = function(b, c) {
  this.statusText = b;
  this.appImages = c;
  this.showStop = null;
};
a.a("chrome.cast.ReceiverDisplayStatus", chrome.cast.Rb);
chrome.cast.D = function(b, c, d, e, g) {
  this.sessionId = b;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = g;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.ma.CONNECTED;
  this.transportId = "";
};
a.a("chrome.cast.Session", chrome.cast.D);
chrome.cast.D.Qa = "custom_receiver_session_id";
a.f(chrome.cast.D, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.D.Qa);
chrome.cast.timeout = {};
a.a("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.Da = 1E4;
a.f(chrome.cast.timeout, "requestSession", chrome.cast.timeout.Da);
chrome.cast.timeout.Qc = 3E3;
a.f(chrome.cast.timeout, "leaveSession", chrome.cast.timeout.Qc);
chrome.cast.timeout.gd = 3E3;
a.f(chrome.cast.timeout, "stopSession", chrome.cast.timeout.gd);
chrome.cast.timeout.dd = 3E3;
a.f(chrome.cast.timeout, "setReceiverVolume", chrome.cast.timeout.dd);
chrome.cast.timeout.ad = 3E3;
a.f(chrome.cast.timeout, "sendCustomMessage", chrome.cast.timeout.ad);
chrome.cast.sb = "mirror_app_id";
a.a("chrome.cast.MIRROR_APP_ID", chrome.cast.sb);
f.wd = {};
f.N = function(b, c, d, e, g, h) {
  this.type = b;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = a.isNumber(g) ? g : 0;
  this.receiverId = h || null;
  this.receiverList = null;
};
f.c = {cb:"iframe_init_result", ea:"fail_to_connect_to_extension", od:"client_reconnect", rc:"v2_message", Ja:"app_message", nd:"client_init", Dd:"log_message", Jd:"request_session", Kd:"request_session_by_id", zd:"leave_session", md:"client_disconnect", Ld:"set_custom_receivers", rd:"custom_dial_launch_response", Md:"set_receiver_display_status", Hd:"query_tab_broadcast_status", Ya:"extension_ready", Ia:"api_iframe_ready", Mb:"receiver_availability", Lb:"receiver_action", yb:"new_session", qc:"update_session", 
Ta:"disconnect_session", Nb:"remove_session", Ka:"app_message_success", gb:"leave_session_success", Xb:"set_receiver_volume_success", Vb:"set_custom_receivers_success", ERROR:"error", Pa:"custom_dial_launch_request", Wb:"set_receiver_display_status_success", ec:"tab_broadcast_status"};
f.u = function(b) {
  this.v = b;
  this.T = this.m = null;
};
f.u.prototype.cd = function(b) {
  this.T = b;
};
f.u.prototype.Ga = function(b) {
  b.clientId = this.v;
  if (!this.m && (this.Uc(), !this.m)) {
    return;
  }
  this.m.postMessage(b);
};
f.u.prototype.Uc = function() {
  !this.m && (this.m = chrome.runtime.connect({name:this.v})) && (this.m.onMessage.addListener(a.bind(this.Ba, this)), this.m.onDisconnect.addListener(a.bind(this.Wc, this)));
};
f.u.prototype.Ba = function(b) {
  this.T && this.T(b);
};
f.u.prototype.Wc = function() {
  this.m = null;
  this.Ba(new f.N(f.c.ea, null));
};
f.A = function(b) {
  this.Ca = b;
  this.oa = null;
};
f.A.prototype.init = function() {
  window.addEventListener("message", this.Vc.bind(this), !1);
};
f.A.prototype.bd = function(b) {
  this.oa = b;
};
f.A.prototype.Vc = function(b) {
  if (b.source != window) {
    var c = b.data;
    this.Ca = c.appOrigin = b.origin;
    this.oa(c);
  }
};
f.A.prototype.Fa = function(b) {
  b.clientId = null;
  window.parent.postMessage(b, this.Ca);
};
f.i = function() {
  this.v = "client-" + String(Math.floor(1E5 * Math.random()));
  this.sessionRequest = null;
  this.I = new f.A(f.i.Ic(window.location.href, "appOrigin"));
  this.U = new f.u(this.v);
  this.ua = 0;
  this.H = null;
};
f.i.prototype.init = function() {
  this.I.init();
  this.I.bd(this.Xc.bind(this));
  this.U.cd(this.Yc.bind(this));
  this.Ac();
};
f.i.Oa = 1E3;
f.i.prototype.Ac = function() {
  var b = this;
  this.ta();
  this.H = setInterval(function() {
    6 > b.ua ? b.ta() : b.Ea(new chrome.cast.Error(chrome.cast.da.EXTENSION_MISSING));
  }, f.i.Oa);
};
f.i.prototype.ta = function() {
  this.ua++;
  this.U.Ga(new f.N(f.c.Ia, void 0, void 0, this.v));
};
f.i.prototype.Ea = function(b) {
  this.H && (clearInterval(this.H), this.H = null, this.I.Fa(new f.N(f.c.cb, b)));
};
f.i.prototype.Xc = function(b) {
  b.clientId = this.v;
  this.U.Ga(b);
};
f.i.prototype.Yc = function(b) {
  switch(b.type) {
    case f.c.Ja:
    ;
    case f.c.Ka:
    ;
    case f.c.ERROR:
    ;
    case f.c.yb:
    ;
    case f.c.qc:
    ;
    case f.c.Ta:
    ;
    case f.c.Nb:
    ;
    case f.c.Mb:
    ;
    case f.c.rc:
    ;
    case f.c.gb:
    ;
    case f.c.Xb:
    ;
    case f.c.Vb:
    ;
    case f.c.ea:
    ;
    case f.c.Pa:
    ;
    case f.c.Wb:
    ;
    case f.c.Lb:
    ;
    case f.c.ec:
      this.I.Fa(b);
      break;
    case f.c.Ya:
      this.Ea(null);
  }
};
f.i.Ic = function(b, c) {
  var d = decodeURIComponent(b).split("?")[1];
  if (!d) {
    return null;
  }
  for (var d = d.split("&"), e, g = 0;g < d.length;g++) {
    if (0 == d[g].indexOf(c)) {
      e = d[g];
      break;
    }
  }
  return e ? e.substring(c.length + 1) || null : null;
};
f.Kc = new f.i;
f.Kc.init();

