//console.log('extension loaded')
var jstorrent_id = "anhdpjpojoipgpmfanmedjghaligalgb"
var jstorrent_lite_id = "abmohcnlldaiaodkpacnldcdnjjgldfh"
var cws_url = "https://chrome.google.com/webstore/detail/"
// TODO -- add jstorrent lite
var createProps = {
    id:"contextMenu",
    title:"Add to JSTorrent",
    contexts:["link"],
    targetUrlPatterns: ["magnet:*",
                        "*://*/*.torrent",
                        "*://*/*.torrent?*",
                        "*://*/*.torrent#*"
                       ]
}

function onContextMenuClickHandler(info, tab) {
        //console.log(info, tab)

        chrome.runtime.sendMessage(jstorrent_id, {command:'add-url',url:info.linkUrl, pageUrl:info.pageUrl}, function(result) {
            console.log('result of message from full',result,chrome.runtime.lastError)
            if (! result) {
                // try lite
                chrome.runtime.sendMessage(jstorrent_lite_id, {command:'add-url',url:info.linkUrl, pageUrl:info.pageUrl}, function(result2) {
                    console.log('result of message from lite',result2,chrome.runtime.lastError)
                    if (! result2) {
                        showInstallAppNotification()                        
                    }
                    // if no result, then try jstorrent full?
                })

            }

            // if no result, then try jstorrent lite ?
        })
}

chrome.contextMenus.onClicked.addListener(onContextMenuClickHandler)

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create(createProps, function() {
        //console.log('created contextMenu')
    })
})



chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    console.log('got external message',request,sender)
    sendResponse( {installed:true, 
                   version:chrome.runtime.getManifest().version
                  })
})

function checkAppsInstalled(callback) {
    var responses = {}
    var responsesRecorded = 0
    chrome.runtime.sendMessage(jstorrent_id, {command:'checkInstalled'}, function(response) {
        responses[jstorrent_id] = {response: response, error: chrome.runtime.lastError}
        responsesRecorded++
        if (responsesRecorded == 2) {
            callback(responses)
        }
    })
    chrome.runtime.sendMessage(jstorrent_lite_id, {command:'checkInstalled'}, function(response) {
        responses[jstorrent_lite_id] = {response: response, error: chrome.runtime.lastError}
        responsesRecorded++
        if (responsesRecorded == 2) {
            callback(responses)
        }
    })
}


checkAppsInstalled( function(responses) {
    console.log('check installed result',responses)

    var foundAny = false
    for (var key in responses) {
        if (responses[key].response) {
            foundAny = true
            break
        }
    }

    if (! foundAny) {
        showInstallAppNotification()
    }
    chrome.notifications.onButtonClicked.addListener( function(id, idx) {
        if (id == 'install-message') {
            if (idx == 0) {
                window.open(cws_url + jstorrent_lite_id, '_blank')
            } else if (idx == 1) {
                window.open(cws_url + jstorrent_id, '_blank')
            }
        } 
        chrome.notifications.clear(id, function(){})
    })
    chrome.notifications.onClicked.addListener( function(id) {
        console.log('clicked notification',id)
        chrome.notifications.clear(id, function(){})
    })
})

function showInstallAppNotification() {
    chrome.notifications.create('install-message',
                                { title:"Install JSTorrent",
                                  type:"basic",
                                  priority:2,
                                  iconUrl: "js-128.png",
                                  message:"This extension requires you to install the JSTorrent application from the Chrome Web Store",
                                  buttons:[
                                      {title:"Get JSTorrent Lite - Free Trial", iconUrl:"cws_32.png"},
                                      {title:"Get JSTorrent Full", iconUrl:"cws_32.png"}
                                  ]
                                }, function(id) {
                                    console.log('created notification with id',id,chrome.runtime.lastError)

                                })
}



function reload() {
    chrome.runtime.reload()
}