/* vfs.js */

function VirtualFileServer(username, hostname){
	this.username = typeof id !== 'undefined' ? routes : "root";
	this.hostname = typeof id !== 'undefined' ? routes : "127.0.0.1";
	return this;
}

VirtualFileServer.prototype.makeKey = function(path){
	return this.username + "@" + this.hostname + ":" + path;
}

VirtualFileServer.prototype.setHost = function(hostname){
	this.hostname = hostname;
}

VirtualFileServer.prototype.setUsername = function(username){
	this.username = username;
}

VirtualFileServer.prototype.request = function(path){
	var key = this.makeKey(path);
	//TODO: retrieve file from redis or return err
	return key //should return file
}

VirtualFileServer.prototype.update = function(path, file){
	var key = this.makeKey(path);
	//TODO: update existing key or create new
	return key //should return file
}

VirtualFileServer.prototype.create = function(path, file){
	var key = this.makeKey(path);
	//TODO: create new key but do not overide existing
	return key //should return file
}


var vfs = new VirtualFileServer();
console.log(vfs.request("~/path/to/file"));

module.exports = VirtualFileServer;