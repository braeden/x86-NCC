(function() {

    function RingBuffer(sz) {
        this.sz = sz
        this.buf = []
        for (var i=0; i<sz; i++) {
            this.buf.push(null)
        }
        this.idx = 0
    }

    var RingBufferproto = {
        add: function(val) {
            this.idx = (this.idx + 1) % this.sz
            this.buf[this.idx] = val
        },
        get: function(relidx) {
            // get values relative to current index
            var realidx = (this.idx + relidx) % this.sz
            if (realidx < 0) {
                realidx += this.sz
            }
            return this.buf[realidx]
        }
    }

    _.extend(RingBuffer.prototype, RingBufferproto)
    jstorrent.RingBuffer = RingBuffer


})()