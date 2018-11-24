//index.js
"use strict";

var http = require('http');
var url = require('url');

function startServer(route, handle)
{
	function onRequest(req, res)
	{
		var pathname = url.parse(req.url).pathname;
		route(pathname, handle, req, res);
	}
	http.createServer(onRequest).listen(8080);
}
console.log('Server running on port 8080');
console.log('Process ID: ', process.pid);

exports.startServer = startServer;