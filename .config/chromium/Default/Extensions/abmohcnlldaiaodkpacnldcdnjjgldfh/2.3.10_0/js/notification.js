function Notification(opts) {
    jstorrent.Item.apply(this, arguments)
    this.id = opts.id
    this.onClick = opts.onClick || this.defaultOnClick
    this.onButtonClick = opts.onButtonClick || this.defaultOnButtonClick
    this.data = opts.data
    this.closeOnClick = true
    var message = opts.message || jstorrent.constants.manifest.name
    if (typeof message != 'string') {
        message = JSON.stringify(message)
    }
    if (typeof opts.details != 'string') {
        opts.details = JSON.stringify(opts.details)
    }

    this.type = opts.type || 'basic'

    if (jstorrent.device.platform == 'Android') {
        if (this.type == 'progress') {
            this.type = 'basic' // not supported yet for cordova
        }
    }

    this.notificationOpts = {
        type: this.type,
        title: message,
        priority: opts.priority || 0,
        message: opts.details,
        iconUrl: "/js-128.png"
    }

    if (opts.buttons) {
        this.notificationOpts.buttons = opts.buttons
    }
    if (opts.progress) {
        this.notificationOpts.progress = opts.progress || 0
    }
    //console.log('notification - opts', this.notificationOpts)
    this.show()
}
jstorrent.Notification = Notification

Notification.prototype = {
    updateTimestamp: function() {
        // hopefully causes it to come to the foreground
        // again. Nope. :-( doesn't. there doesn't seem to be any way
        // to actually bring an existing notification back to the
        // foreground
        chrome.notifications.update(this.id, {eventTime: new Date().getTime()}, _.bind(function(wasUpdated) {
            //console.log('notification.wasupdated',this.id)
        },this))
    },
    defaultOnClick: function() {
        //this._collection each blah.remove(this) // onClosed event gets triggered, which does this
        chrome.notifications.clear(this.id, function(id) {
            //console.log('cleared notification with id',id)
            // hopefully onClosed gets triggered... ?
        })
    },
    defaultOnButtonClick: function(idx) {
        //this._collection each blah.remove(this) // onClosed event gets triggered, which does this
        chrome.notifications.clear(this.id, function(id) {
            console.log('(button click) cleared notification with id,idx',id,idx)
            // hopefully onClosed gets triggered... ?
        })
    },
    close: function() {
        chrome.notifications.clear(this.id, function(){})
    },
    get_key: function() {
        return this.id
    },
    show: function() {
        if (jstorrent.options.disable_notifications) return
        var notification = chrome.notifications.create(this.id, this.notificationOpts, function(id) {
            //console.log('created notification with id',id)
        })
    },
    handleClick: function() {
        this.onClick()
        if (this.closeOnClick) {
            this.defaultOnClick()
        }
    },
    handleButtonClick: function(idx) {
        if (this.onButtonClick) {
            this.onButtonClick(idx)
        } else {
            this.defaultOnButtonClick(idx)
        }
        // suspect
        if (this.closeOnClick) {
            this.defaultOnClick()
        }
    }
}

for (var method in jstorrent.Item.prototype) {
    jstorrent.Notification.prototype[method] = jstorrent.Item.prototype[method]
}
