if (! String.prototype.endsWith) {
    String.prototype.endsWith = function(substr) {
        for (var i=0; i<substr.length; i++) {
            if (this[this.length - 1 - i] !== substr[substr.length - 1 - i]) {
                return false
            }
        }
        return true
    }
}
if (! String.prototype.startsWith) {
    String.prototype.startsWith = function(substr) {
        for (var i=0; i<substr.length; i++) {
            if (this[i] !== substr[i]) {
                return false
            }
        }
        return true
    }
}
window['jstorrent'] = window['jstorrent'] || {}
jstorrent.device = window.device || { platform: "Chrome" };
jstorrent.constants = {
    PIECE_ON_DISK: 1, // internal bitfield constants
    PIECE_IN_MEMORY: 2, // means this piece has been downloaded but not written to disk
    PIECE_NOT_PRESENT: 0,
    cws_jstorrent: "anhdpjpojoipgpmfanmedjghaligalgb",
    cws_jstorrent_lite: "abmohcnlldaiaodkpacnldcdnjjgldfh",
    cws_jstorrent_extension: "bnceafpojmnimbnhamaeedgomdcgnbjk",
    cws_base_url: "https://chrome.google.com/webstore/detail/",
    cws_jstorrent_extension_url: "https://chrome.google.com/webstore/detail/bnceafpojmnimbnhamaeedgomdcgnbjk",
    PRIO_SKIP: 0, // file priority
    PRIO_NORM: 1,
    cws_url: "https://chrome.google.com/webstore/detail/",
    keyPresentInPreRewrite: 'blah',
    manifest: chrome.runtime.getManifest(),
    chunkRequestTimeoutInterval: 20000,
    endgameDuplicateRequests: 3,
    publicTrackers: ["udp://tracker.openbittorrent.com:80",
                     'udp://tracker.istole.it:6969',
                     "udp://tracker.publicbt.com:80"],
    announceSizeBuckets: [0,1,5,10,25,50,100,200,400,800,1600]
}
jstorrent.strings = {
    NOTIFY_NO_DOWNLOAD_FOLDER: 'No Download Folder selected. Click to select your Download Directory.',
    NOTIFY_HOW_TO_CHANGE_DOWNLOAD_DIR: "You can change the download directory in the Options page",
    NOTIFY_SET_DOWNLOAD_DIR: "Set default download location to "
}
jstorrent.getLocaleString = function(s) {
    if (arguments.length > 1) {
        // TODO %s handling etc
        for (var i=1; i<arguments.length; i++) {
            s += arguments[i]
        }
    }
    return s
}
jstorrent.options = {
    disable_notifications: false,
    transferable_objects: true,
    use_metadata_cache: true, // speeds up the app diskio
    use_fileentry_cache: true, // speeds up the app diskio
    load_options_on_start: false,
    add_torrents_on_start: false,
    run_unit_tests: true,
    disable_trackers: false,
    slow_diskio: false,
    slow_hashcheck: false,
    use_piece_cache: false,
    seed_public_torrents: false, // default off
    allow_report_torrent_bug: false,
    reset_on_complete: false, // reset torrent state on torrent completion (testing)
    manual_peer_connect_on_start: {
//        "d0a7ed3e79d51ea05775cae7122d5e46c0a9451f": ['127.0.0.1:6881']
//        'b91ec066668f2ce8111349ae86cc81941ce48c69': ['184.75.214.170:15402']
//        'b91ec066668f2ce8111349ae86cc81941ce48c69': ['127.0.0.1:9090'],
//        '726ff42f84356c9aeb27dfa379678c89f0e62149': ['127.0.0.1:9090'],
    }
//    always_add_special_peer: ['127.0.0.1:8030','127.0.0.1:8031','127.0.0.1:8032','127.0.0.1:8033']
//    manual_infohash_on_start: ['726ff42f84356c9aeb27dfa379678c89f0e62149']
}
bind = Function.prototype.bind


function tryauth() {
    var args = { client_id: "432934632994-20rclui1m8od0p2g09vfbrdnk93gbraa.apps.googleusercontent.com",
                 redirect_uri: "https://anhdpjpojoipgpmfanmedjghaligalgb.chromiumapp.org/google",
                 response_type: "token",
                 scope:"openid",
                 "openid.realm": "https://anhdpjpojoipgpmfanmedjghaligalgb.chromiumapp.org"}

    var qs = []
    for (var key in args) {
        qs.push( key + '=' + encodeURIComponent(args[key]) )
    }
    //var url = "https://www.google.com/accounts/o8/id"
    //var url = "http://jstorrent.com"
    var url = "https://accounts.google.com/o/oauth2/auth"
    url = url + '?' + qs.join('&')
    console.log(url)
    chrome.identity.launchWebAuthFlow({
        url: url,
        interactive:false
    },
                                      function(d){console.log('launchflow',d)})
}

    


function reload() {
    if (app) { app.unminimize() }
    if (app && app.webapp) { app.webapp.stop() }

    chrome.runtime.reload()
}

function ui8IndexOf(arr, s, startIndex) {
    // searches a ui8array for subarray s starting at startIndex
    startIndex = startIndex || 0
    var match = false
    for (var i=startIndex; i<arr.length - s.length + 1; i++) {
        if (arr[i] == s[0]) {
            match = true
            for (var j=1; j<s.length; j++) {
                if (arr[i+j] != s[j]) {
                    match = false
                    break
                }
            }
            if (match) {
                return i
            }
        }
    }
    return -1
}

function str2ab(str) {
    return new TextEncoder('utf-8').encode(str).buffer;
}

// TODO // merge this; comes from web-server-chrome
var stringToUint8ArrayWS = function(string) {
    var buffer = new ArrayBuffer(string.length);
    var view = new Uint8Array(buffer);
    for(var i = 0; i < string.length; i++) {
        view[i] = string.charCodeAt(i);
    }
    return view;
};

function arrayBufferToStringWS(buffer) {
    // TODO // merge this with ui82str. this comes from web-server-chrome
    var str = '';
    var uArrayVal = new Uint8Array(buffer);
    for(var s = 0; s < uArrayVal.length; s++) {
        str += String.fromCharCode(uArrayVal[s]);
    }
    return str;
}

function ui82str(arr, startOffset) {
    console.assert(arr)
    if (! startOffset) { startOffset = 0 }
    var length = arr.length - startOffset // XXX a few random exceptions here
    var str = ""
    for (var i=0; i<length; i++) {
        str += String.fromCharCode(arr[i + startOffset])
    }
    return str
}
function ui82arr(arr, startOffset) {
    if (! startOffset) { startOffset = 0 }
    var length = arr.length - startOffset
    var outarr = []
    for (var i=0; i<length; i++) {
        outarr.push(arr[i + startOffset])
    }
    return outarr
}

function base32tohex(base32) {
    var base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    var bits = "";
    var hex = "";

    for (var i = 0; i < base32.length; i++) {
        var val = base32chars.indexOf(base32.charAt(i).toUpperCase());
        bits += pad(val.toString(2), '0', 5);
    }

    for (var i = 0; i + 4 <= bits.length; i += 4) {
        var chunk = bits.substr(i, 4);
        hex = hex + parseInt(chunk, 2).toString(16);
    }
    return hex;
}

function parse_magnet(url) {
    var uri = url.slice(url.indexOf(':')+2)
    var parts = uri.split('&');
    var kv, k, v
    var d = {};
    for (var i=0; i<parts.length; i++) {
        kv = parts[i].split('=');
        k = decodeURIComponent(kv[0]);
        v = decodeURIComponent(kv[1]);
        if (! d[k]) d[k] = []
        d[k].push(v);
    }
    if (! d.xt) { return }
    var xt = d.xt[0].split(':');
    var hash = xt[xt.length-1];

    // need to make this recognize base32, etc(?)
    if (hash.length == 32) {
        hash = base32tohex(hash)
        
    }

    d['hashhexlower'] = hash.toLowerCase()
    return d;
}

// from python land, assumes arr is sorted
function bisect_left(arr, x, lo, hi) {
    var mid
    if (lo === undefined) { lo=0 }
    if (hi === undefined) { hi=arr.length }
    while (lo < hi) {
        mid = Math.floor((lo+hi)/2)
        if (arr[mid] < x) { lo = mid+1 }
        else { hi = mid }
    }
    return lo
}

function bisect_right(arr, x, lo, hi) {
    var mid
    if (lo === undefined) { lo=0 }
    if (hi === undefined) { hi=arr.length }
    while (lo < hi) {
        mid = Math.floor((lo+hi)/2)
        if (x < arr[mid]) { hi = mid }
        else { lo = mid+1 }
    }
    return lo
}

function intersect(a,b, c,d) {
    // intersects intervals [a,b], and [c,d]
    if (b < c || d < a) { return null }
    else { return [Math.max(a,c), Math.min(b,d)] }
}

function pad(s, padwith, len) {
    // pad the string s with padwith to length upto
    while (true) {
        if (s.length == len) {
            return s
        } else if (s.length < len) {
            s = padwith + s
        } else if (s.length > len) {
            console.assert(false)
            return
        }
    }
}

(function() {
    var units = ['B','kB','MB','GB','TB']
    var idxmax = units.length - 1

    function byteUnitsGeneric(roundOpt, val) {
        // TODO - this is dumb, dont divide, just do comparison. more efficient
        if (val === undefined || val == 0) { return '' }
        var idx = 0
        while (val >= 1024 && idx < idxmax) {
            val = val/1024
            idx++
        }
        var round = (idx==0) ? 0 : roundOpt
        return val.toFixed(round) + ' ' + units[idx]
    }

    var byteUnits = byteUnitsGeneric.bind(undefined, 2)
    window.byteUnits = byteUnits

    function byteUnitsSec(val) {
        var v = byteUnitsGeneric(0,val)
        if (v) {
            return v + '/s'
        } else {
            return v
        }
    }
    window.byteUnitsSec = byteUnitsSec

    var sunits = ['s','m','h','d']
    var ssz = [1, 60, 60*60, 24*60*60]

    function formatValETA(val) {
        var parts = []
        if (val === undefined || val == 0) { return '' }
        for (var i=ssz.length-1;i>=0;i--) {
            if (val > ssz[i]) {
                parts.push( Math.floor(val / ssz[i]) + sunits[i] )
                val = val % ssz[i]
            }
        }
        return parts.join(' ')
    }
    window.formatValETA = formatValETA

})()

/*
useful parseUri regexp credit https://github.com/derek-watson/jsUri
*/

var parseUriRE = {
    uri: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
}

function parseUri(str) {
    var parser = parseUriRE.uri;
    var parserKeys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    var m = parser.exec(str || '');
    var parts = {};

    parserKeys.forEach(function(key, i) {
        parts[key] = m[i] || '';
    });

    return parts;
}

window.onerror = function(message, url, line) {
    // TODO -- report this to google analytics or something
    if (window.app) {
        if (url.toLowerCase().match('^chrome-extension://')) {
            var parts = url.split('/')
            parts.shift(); parts.shift(); parts.shift()
            url = parts.join('/')
        }
        window.app.createNotification({message:"Unexpected Error!",
                                       priority: 2,
                                       details: 'ver ' + jstorrent.constants.manifest.version+". In file " + url + " at line " + line + ', ' + message})

        // if window.onerror has an error, then bad things happen.
        // make sure sendEvent cant have bad errors :-)
        try {
            window.app.analytics.sendEvent("window.onerror("+jstorrent.constants.manifest.version+")", url + "(" + line + ")", message)
        } catch(e) {
            console.error('error sending window.onerror analytics event')
        }

    }
    console.log('window.onerror triggered',message,url,line)
}