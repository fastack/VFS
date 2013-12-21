/* vfs.js */

var makeKey = function(id, hostname, path){
	return id + ":" + hostname + ":" + path;
}

console.log(makeKey("1", "html", "path/to/file"));