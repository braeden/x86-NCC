function File(opts) {
    jstorrent.Item.apply(this, arguments)
    console.assert(typeof opts.num == 'number')
    this.torrent = opts.torrent
    this.num = opts.num

    if (this.torrent.multifile) {
        // should we prepend torrent name? Yes.
        var path = [this.torrent.get('name')].concat( this.torrent.infodict.files[this.num].path )
        this.path = path
        this.name = path[path.length-1]

        if (this.num == this.torrent.numFiles - 1) {
            this.size = this.torrent.size - this.torrent.fileOffsets[this.num]
        } else {
            this.size = this.torrent.fileOffsets[this.num+1] - this.torrent.fileOffsets[this.num]
        }
    } else {
        this.path = [this.torrent.infodict.name]
        this.name = this.torrent.infodict.name
        this.size = this.torrent.size
    }
    console.assert(!isNaN(this.size) && typeof this.size == 'number')

    this.startByte = this.torrent.fileOffsets[this.num]
    if (this.num == this.torrent.numFiles - 1) {
        this.endByte = this.torrent.size - 1
    } else {
        this.endByte = this.torrent.fileOffsets[this.num + 1] - 1
    }

    this.set('downloaded',this.getDownloaded()) // not zero! need to get our spanning pieces and add up the components...
    this.set('complete',this.get('downloaded')/this.size)
    this.set('priority',this.getPriority())
    this.set('leftPiece', Math.floor(this.startByte / this.torrent.pieceLength))
    this.set('rightPiece', Math.ceil(this.endByte / this.torrent.pieceLength))
    this.set('name',this.name)
    this.set('size',this.size)
    this.set('path',this.path.join('/'))
    //this.on('change', _.bind(this.priorityChanged,this)) // NO, we use contextmenu now
}
File.getStoragePath = function(torrent) {
    if (torrent.multifile) {
        return torrent.get('name')
    } else {
        return torrent.infodict.name
    }
}
jstorrent.File = File
File.prototype = {
    intersectsPiece: function(piece) {
        var intersection = intersect(piece.startByte,
                                     piece.endByte,
                                     this.startByte,
                                     this.endByte)
        return intersection
    },
    getCompleteRanges: function() {
        // returns all the filled in ranges for this file.
        var intervals = []
        var infos = this.getSpanningPiecesInfo()

        var start = null
        var end = null

        for (var i=0; i<infos.length; i++) {
            var info = infos[i]
            if (this.torrent._attributes.bitfield[info.pieceNum]) {
                if (start === null) {
                    start = info.fileOffset
                }
                end = info.fileOffset + this.torrent.getPieceSize(info.pieceNum) - 1
            } else {
                // piece is dead, and we had market a beginning
                if (start !== null) {
                    intervals.push( [start, end] )
                    start = null
                    end = null
                }
            }
        }
        if (start !== null && end !== null) {
            intervals.push( [start, end ] )
        }
        return intervals
    },
    isComplete: function() {
        return this.get('complete') == 1
    },
    priorityChanged: function(file,newVal,oldVal,attrName) {
        if (oldVal === undefined) { oldVal = 1 } // default value is "1" - Normal priority
        if (attrName != 'priority') { return }
        var priority
        if (newVal == 'Skip') {
            priority = 0
        } else {
            priority = 1
        }
        this.torrent.setFilePriority(this.num,priority,oldVal)
    },
    streamable: function() {
        var ext = this.name.toLowerCase()
        if (window.MIMECATEGORIES) {
            for (var i=0; i<MIMECATEGORIES.video.length; i++) {
                if (ext.endsWith('.' + MIMECATEGORIES.video[i])) {
                    return {type:'video'}
                }
            }
            for (var i=0; i<MIMECATEGORIES.audio.length; i++) {
                if (ext.endsWith('.' + MIMECATEGORIES.audio[i])) {
                    return {type:'audio'}
                }
            }
        }
    },
    readBytes: function(start, size, callback) {
        var storage = this.torrent.getStorage()
        console.assert(size > 0)
        storage.diskio.getContentRange({file:this,
                                        fileNum:this.num,
                                        fileOffset:start,
                                        size:size,
                                        torrent:this.torrent.hashhexlower
                                       },
                                       callback)
    },
    getSpanningPiecesInfo: function(startByte, endByte) { // similar to piece.getSpanningFilesInfo
        if (startByte === undefined) { startByte = this.startByte }
        if (endByte === undefined) { endByte = this.endByte }

        var leftPiece = Math.floor(startByte / this.torrent.pieceLength)
        var rightPiece = Math.min(Math.floor(endByte / this.torrent.pieceLength), // XXX changed from ceil to floor
                                  this.torrent.numPieces - 1)

        var allInfos = []
        var curInfos

        var curPiece
        for (var i=leftPiece; i<=rightPiece; i++) {
            //curPiece = this.torrent.getPiece(i)
            // also takes piece offset and piece size parameters
            var fileOffset = startByte
            var fileSize = endByte - startByte + 1
            // XXX no way to pass in exact ranges and get offsets etc
            curInfos = jstorrent.Piece.getSpanningFilesInfo(this.torrent, i, this.torrent.getPieceSize(i))
            console.assert(curInfos.length > 0)

            for (var j=0; j<curInfos.length; j++) {
                if (curInfos[j].fileNum == this.num) {
                    curInfos[j].pieceNum = i
                    allInfos.push(curInfos[j])
                }
            }
        }
        return allInfos
    },
    getPriority: function() {
        var arr = this.torrent.get('filePriority')
        if (! arr) {
            return 1
        } else {
            return arr[this.num]
        }
    },
    getDownloaded: function() {
        var pieceSpans = this.getSpanningPiecesInfo()
        var pieceSpan
        var downloaded = 0
        for (var i=0; i<pieceSpans.length; i++) {
            pieceSpan = pieceSpans[i]
            if (this.torrent._attributes.bitfield[pieceSpan.pieceNum]) {
                downloaded += pieceSpan.size
            }
        }
        return downloaded
    },
    get_key: function() {
        return this.num
    },
    getCachedData: function(offset, size) {
        // if data is in piece cache, return it
        var pieceinfos = this.getSpanningPiecesInfo(this.startByte + offset, this.startByte + offset + size - 1)
        console.assert(pieceinfos.length > 0)

        var haveAllCached = true
        for (var i=0; i<pieceinfos.length; i++) {
            var cacheData = this.torrent.pieceCache.get(pieceinfos[i].pieceNum)
            if (! cacheData) {
                haveAllCached = false
                break
            }
        }
        
        if (haveAllCached) {
            var szLeft = size
            var consumed = 0

            var toret = new Uint8Array(size)

            for (var i=0; i<pieceinfos.length; i++) {
                var pieceinfo = pieceinfos[i]
                if (i == 0) {
                    var a = offset - pieceinfo.fileOffset
                } else {
                    var a = 0
                }
                var curSz = Math.min( pieceinfo.size - a,
                                      szLeft )
                var b = a + curSz
                var cacheData = this.torrent.pieceCache.get(pieceinfo.pieceNum).data
                console.assert(a >= 0)
                console.assert(b <= cacheData.byteLength)
                szLeft -= curSz
                var buf = cacheData.slice(a,b)
                toret.set( buf, consumed)
                consumed += curSz
            }
            return toret.buffer
        }

    },
    getCachedEntry: function() {
        return this.torrent.client.app.entryCache.getByFile(this)
    },
    getCachedMetadata: function() {
        return this.torrent.client.app.fileMetadataCache.getByFile(this)
    },
    getEntryFile: function(callback) {
        console.assert(false) // dont call this
        // XXX -- cache this for read events and have it get wiped out after a write event
        var fd = {}
        var filesystem = this.torrent.getStorage().entry
        var path = this.path.slice()
        recursiveGetEntry(filesystem, path, function(entry) {
            fd.metadata = { fullPath:entry.fullPath,
                            name:entry.name }
            entry.file( function(f) {
                //console.log('collected file',fileNum,f)
                fd.metadata.lastModifiedDate = f.lastModifiedDate
                fd.metadata.size = f.size
                fd.metadata.type = f.type
                fd.file = f
                callback(fd)
            })
        })
        
    },
    getEntry: function(callback) {
        // XXX this is not calling callback in some cases!
        // gets file entry, recursively creating directories as needed...
        var filesystem = this.torrent.getStorage().entry
        var path = this.path.slice()
        recursiveGetEntry(filesystem, path, callback)
    }
}
for (var method in jstorrent.Item.prototype) {
    jstorrent.File.prototype[method] = jstorrent.Item.prototype[method]
}

function recursiveGetEntry(filesystem, path, callback) {
    function recurse(e) {
        if (path.length == 0) {
            if (e.isFile) {
                callback(e)
            } else {
                callback({error:'file exists'})
            }
        } else if (e.isDirectory) {
            if (path.length > 1) {
                // this is not calling error callback, simply timing out!!!
                e.getDirectory(path.shift(), {create:true}, recurse, recurse)
            } else {
                e.getFile(path.shift(), {create:true}, recurse, recurse)
            }
        } else {
            callback({error:'file exists'})
        }
    }
    recurse(filesystem)
}