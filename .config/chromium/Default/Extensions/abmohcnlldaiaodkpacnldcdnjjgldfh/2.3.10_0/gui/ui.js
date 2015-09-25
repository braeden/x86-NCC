function UI(opts) {
    function fracToPercent(val) {
        if (val === undefined || val === null) { return '' }
        return (val * 100).toFixed(1) + '%';
    }
    function priority(val) {
        return val == 0 ? 'Skip' : ''
    }
    function fileAction(val) {
        //return '<a href="https://code.google.com/p/chromium/issues/detail?id=328803&thanks=328803&ts=1387186852" target="_blank">Open</a>'

        var streamable = val.streamable()
        if (streamable && app.webapp) {
            return '<a target="_blank" href="' + val.torrent.getPlayerURL(val.num, streamable) + '"><span class="glyphicon glyphicon-play"></span>Play</a>'
        } else {
            return ''
        }
    }

    this.client = opts.client

    this.detailtable = null
    //var default_tab = 'peers' // TODO -- remember last
    var default_tab = 'files'
    this.detailtype = default_tab

    this.coldefs = {
        'torrent': [
            {id: "name", name: "Name", width:400, sortable:true},
            {id: "state", name: "State", sortable:true},
            {id: "bytes_received", name: "Bytes Received", formatVal: byteUnits, width:100},
            {id: "size", name: "Size", formatVal: byteUnits, width: 100, sortable:true},
            {id: "complete", name: "% Complete", formatVal: fracToPercent},
            {id:'downspeed', name: "Down Speed", width:90, formatVal: byteUnitsSec },
            {id:'eta', name: "ETA", formatVal: formatValETA, width:60},
            {id: "numpeers", name: "Peers"},
            {id: "bytes_sent", name: "Bytes Sent", formatVal: byteUnits},
            {id:'upspeed', formatVal: byteUnitsSec},
            {id: 'downloaded', formatVal:byteUnits},
            {id: "added", sortable:true},
            {id: "numswarm", name: "Swarm"}
        ],
        'peers':[
            {name:"Address", id:"address", width:125},
            {name:"Client", id:'peerClientName', width:125},
            {id:"state", name: "State", width:90},
            {id:"complete", name: "% Complete", formatVal: fracToPercent},
            {id:"bytes_sent", name: "Bytes Sent"},
            {id:"bytes_received", name: "Bytes Received"},
            {id:'requests', name:"Req", width:50},
            {id:'responses', name:"Resp", width:50},
            {id:'outstanding', name:"Outstanding", width:50},
            {id:"last_message_sent", name: "Last Sent"},
            {id:"last_message_received", name: "Last Received", width:120},
            {id:'timeouts'},
            {id:"amChoked"},
            {id:"peerChoked"}
        ],
        'swarm':[
            {attr:"host", width:110, sortable:true},
            {attr:"port", sortable:true},
            {id:"connected_ever", name: "Ever Connected", sortable:true},
            {id:'connectionResult', sortable:true, width:300}
        ],
        'trackers':[
            {attr:'url', name:"URL", width:200, sortable:true},
            {id:'announces'},
            {id:'errors'},
            {id:'timeouts'},
            {id:'seeders'},
            {id:'leechers'},
            {id:'lasterror', width:400}
        ],
        'diskio':[
            {id:'jobId', width:55},
            {id:'type', width:150},
            {id:'state', width:120},
            {id:'pieceNum', width:70},
            {id:'fileNum', width:60},
            {id:'size', width:80},
            {id:'progress',width:65},
            {id:'fileOffset', width:120},
            {id:'pieceOffset'},
            {id:'torrent'}
        ],
        'files':[
            {attr:'num', name:"Number", sortable:true},
            {attr:'name', name:"Name", width:400, sortable:true},
            {attr:'size', name:"Size", formatVal:byteUnits, width:100, sortable:true},
            {name:"Action" , displayFunc: fileAction},
            {id:"priority", formatVal: priority, sortable:true
/*
  ,editor: Slick.Editors.SelectCellEditor,
             options:"Normal,Skip",
             formatVal: function(v) {
                 return (v == 0) ? 'Skip' : ''
             },
             name:'Priority',*/
            },
            {id:'downloaded', name:"Downloaded", formatVal:byteUnits, width:100},
            {id:'complete', name:"Complete", formatVal: fracToPercent, sortable:true},
            {id:'streaming'},
            {id:'leftPiece'},
            {id:'rightPiece'}
        ],
        'pieces':[
            {attr:'num'},
            {attr:'size', formatVal:byteUnits},
            {attr:'haveData'},
            {id:'requests', name:"Req", width:50},
            {id:'responses', name:"Resp", width:50},
            {id:'timeouts'},
            {attr:'haveDataPersisted'},
            {attr:'numChunks'}
        ]
    }

    this.undestroy()

    this.client.on('change',function(item, newval, oldval, attr) {
        if (attr == 'downspeed') {
            if (newval) {
                $('#client-infobar-down').text( 'Down: ' + byteUnitsSec(newval) )
            } else {
                $('#client-infobar-down').text('')
            }
        } else if (attr == 'upspeed') {
            if (newval) {
                $('#client-infobar-up').text( 'Up: ' + byteUnitsSec(newval) )
            } else {
                $('#client-infobar-up').text('')
            }
        }
    })
}

UI.prototype = {
    destroy: function() {
        this.torrenttable.destroy()
        if (this.detailtable) {
            this.detailtable.destroy()
        }
        $('#ui-wrapper').hide()
    },
    undestroy: function() {
        $('#ui-wrapper').show()
        this.torrenttable = new SlickCollectionTable( { collection: this.client.torrents,
                                                        domid: 'torrentGrid',
                                                        columns: this.coldefs.torrent
                                                      } )
        this.torrenttable.grid.onSelectedRowsChanged.subscribe( _.bind(this.handle_torrent_selection_change,this))
    },
    get_selected_files: function() {
        var rows = this.detailtable.grid.getSelectedRows()
        var files = []
        var file
        for (var i=0; i<rows.length; i++) {
            file = this.detailtable.grid.getData()[rows[i]]
            files.push( file )
        }
        return files
    },
    get_selected_torrents: function() {
        var rows = this.torrenttable.grid.getSelectedRows()
        var torrents = []
        var torrent
        for (var i=0; i<rows.length; i++) {
            torrent = this.client.torrents.get_at(rows[i])
            torrents.push( torrent )
        }
        return torrents
    },
    handle_torrent_selection_change: function(evt, data) {
        var selected = data.rows;
	//console.log('selection change',selected);

        if (selected.length > 0) {
            var torrent = this.client.torrents.get_at(selected[0])
            this.set_detail(this.detailtype, torrent)
        } else {
            if (this.detailtable) {
                this.detailtable.destroy()
                this.detailtable = null
            }
        }
        
    },
    get_selected_torrent: function() {
        var idx = this.torrenttable.grid.getSelectedRows()[0]
        var torrent = this.client.torrents.get_at(idx)
        return torrent
    },
    set_detail_webserver: function() {
        this.detailtype = 'diskio'
        if (this.detailtable) {
            this.detailtable.destroy()
            this.detailtable = null
        }
        var domid = 'detailGrid'

        this.detailtable = new SlickCollectionTable({collection: app.client.packageDisk.diskio,
                                                     domid: domid,
                                                     columns: this.coldefs['diskio']
                                                    });

    },
    set_detail: function(type, torrent) {
        //console.log('set detail',type,torrent)
        this.detailtype = type

        if (this.detailtable) {
            this.detailtable.destroy()
            this.detailtable = null
        }

        var domid = 'detailGrid'

        if (type == 'diskio') {
            if (torrent.getStorage()) {
                this.detailtable = new SlickCollectionTable({collection: torrent.getStorage().diskio,
                                                             domid: domid,
                                                             columns: this.coldefs[type]
                                                            });
            } else {
                // no storage...
            }
        } else if (type == 'info') {
            // general info pane

            if (! torrent.infodict && torrent.get('metadata')) {
                torrent.loadMetadata(function(){})
            }

            this.detailtable = new GeneralInfoView({
                domid: domid,
                torrent: torrent,
            })
        } else {
            if (! torrent[type] || ! this.coldefs[type]) {
                console.warn('invalid table definition for type',type)
            } else {
                this.detailtable = new SlickCollectionTable({collection: torrent[type],
                                                             domid: domid,
                                                             columns: this.coldefs[type]
                                                            });

                if (this.detailtype == 'files') {
                    if (torrent.get('metadata') && ! torrent.infodict) {
                        torrent.loadMetadata(function(){}) // this should initialize the files
                    } else if (torrent.infodict) {
                        torrent.initializeFiles()
                    } else {
                        // XXX TODO -- make torrent list refresh once metadata is completed...
                        this.detailtable.grid.setData([])
                    }
                } else if (this.detailtype == 'peers') {
                    this.detailtable.grid.onDblClick.subscribe( _.bind(app.handle_dblclick, app, 'peers', torrent[type]) )
                } else if (this.detailtype == 'swarm') {
                    this.detailtable.grid.onDblClick.subscribe( _.bind(app.handle_dblclick, app, 'swarm', torrent[type]) )
                }
            }
        }
    }
}


function GeneralInfoView(opts) {
    this.opts = opts
    this.torrent = opts.torrent
    this.render()
}
GeneralInfoView.prototype = {
    render: function() {
        //$('#'+this.opts.domid).css('opacity',1)
        //$('#'+this.opts.domid).stop()
        $('#'+this.opts.domid).show()

        if (! this.torrent) {
            $('#'+this.opts.domid).html("<p>No Torrent selected</p>")
/*        } else if (! this.torrent.infodict && this.torrent.get('metadata')) {
            $('#'+this.opts.domid).html("Loading...")
            //$('#'+this.opts.domid).fadeOut()
*/
        } else {
            var s = '<div style="-webkit-user-select: text; overflow:scroll"><ul>'
            var excludes = ['info', 'announce','announce-list']
            var magnet = this.torrent.getMagnetLink()
            s += '<label>Links</label>'
            s += ('<li>magnet link: <a target="_blank" href="'+magnet+'">' + _.escape(magnet) +  '</a></li>')
            s += ('<li>share link: <a target="_blank" href="'+this.torrent.getShareLink()+'">JSTorrent.com web link for sharing</a></li>')
            if (false && app.options.get('enable_webserver')) {
                s += ('<li>share link: <a target="_blank" href="'+this.torrent.getPlayerURL()+'">Video Player</a></li>') // now in files tab
            }

            //var attr_includes = ['added']
            var attr_includes = this.torrent._attributes
            var attr_excludes = ['bitfield','filePriority']

            var haveExtraMeta = false
            if (this.torrent.metadata) {
                for (var key in this.torrent.metadata) {
                    if (! _.contains(excludes, key)) {
                        if (! haveExtraMeta) {
                            s += '<label style="margin-top:0.5em">Extra Metadata</label>'
                            haveExtraMeta = true
                        }
                        s += ('<li>' + _.escape(key) + ': ' + this.renderValue(this.torrent.metadata[key]) + '</li>')
                    }
                }
            } else {
                s += '<li>Metadata not present (magnet only)</li>'
            }

            s += '<label style="margin-top:0.5em">Attributes</label>'
            for (var key in attr_includes) {
                if (! _.contains(attr_excludes, key)) {
                    s += ('<li>' + _.escape(key) + ': ' + this.renderValue(this.torrent._attributes[key]) + '</li>')
                }
            }

            s += ('<li>' + _.escape('multifile') + ': ' + this.renderValue(this.torrent.multifile) + '</li>')
            s += ('<li>' + _.escape('private') + ': ' + this.renderValue(this.torrent.isPrivate()) + '</li>')
            if (this.torrent.getStorage()) {
            s += ('<li>' + _.escape('storage') + ': ' + 
                  this.renderValue(this.torrent.getStorage().key + ', ' +
//                                   (this.torrent.getStorage().entry ? this.torrent.getStorage().entry.name : 'noentry') +
                                   (this.torrent.getStorage().get('entrydisplaypath') ? this.torrent.getStorage().get('entrydisplaypath') : '')) +
                  '</li>')
            } else {
                s += ('<li>storage: null</li>')
            }
            s += ('<li>' + _.escape('lasterror') + ': ' + this.renderValue(this.torrent.lasterror) + '</li>')

            s += '</ul></div>'
            $('#'+this.opts.domid).html(s)
        }
        this.resizeCanvas()
    },

    renderValue: function(v) {
        if (typeof v == 'string' &&
            (v.toLowerCase().match('^http:') || 
             v.toLowerCase().match('^https:'))
           ) {
            return '<a target="_blank" href="'+v+'">'+_.escape(v)+'</a>'
        } else {
            return _.escape(v)
        }
    },
    destroy: function() {
        $('#'+this.opts.domid).html("")
    },
    resizeCanvas: function() {
        //console.log('info view - resize my canvas')
        $('#'+this.opts.domid).children().height( $('#'+this.opts.domid).height() )
    }
}