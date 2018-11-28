//index.js
"use strict";

var http = require('http');
var url = require('url');

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
	http.createServer(onRequest).listen(process.env.PORT);
}
console.log('Server running on port '+process.env.PORT+ ' | Process ID: ' +process.pid);

exports.startServer = startServer;