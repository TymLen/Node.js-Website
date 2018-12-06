//index.js
"use strict";

var http = require('http');
var url = require('url');
var port = process.env.PORT || 80;

function startServer(route, handle)
{
	function onRequest(req, res)
	{
		var pathname = url.parse(req.url).pathname;
		var postData ='';
		if(req.url.indexOf('/getMoreInfo') !=-1)
			{
				req.addListener('data', function (data){
					postData += data;
				});
				
				req.addListener('end', function(){
					route(pathname, handle, req, res, postData);
				});
				
			}else{
				route(pathname, handle, req, res, postData);
			}
		
	}
	http.createServer(onRequest).listen(80);
}
console.log('Server running on port '+port+' | Process ID: ' +process.pid);

exports.startServer = startServer;