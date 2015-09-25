/*
  not actually using this, using a generic Collection

function Swarm(opts) {
    jstorrent.Collection.apply(this, arguments)
    this.torrent = opts.torrent;
}

jstorrent.Swarm = Swarm;

Swarm.prototype = {
}
for (var method in jstorrent.Collection.prototype) {
    jstorrent.Swarm.prototype[method] = jstorrent.Collection.prototype[method]
}

*/