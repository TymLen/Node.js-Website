//index.js
"use strict";

var fs = require("fs");

function route(pathname, handle, req, res, postData)
{
	if(typeof handle[pathname] === 'function')
	{
		handle[pathname](req, res, postData);
	}
	else if(req.url.indexOf('stylesheet.css') !=-1)
	{
		fs.readFile('../Website/css/stylesheet.css', function read(err, data)
		{
			if(err){
				console.log(err);
			}
			res.writeHead(200, {"Content-Type": "text/css"});
			res.end(data);
		});
	}
	else if(req.url.indexOf('.png') !=-1){
		var fileName = req.url;
		fileName = fileName.split('\\').pop().split('/').pop();
		fs.readFile('../Website/images/'+fileName, function read(err, data){
			if(err){
				console.log(err);
			}
			res.writeHead(200, {"Content-Type": "image/png"});
			res.end(data);
		});
	}
	else if(req.url.indexOf('.js') !=-1){
		var fileName = req.url;
		fileName = fileName.split('\\').pop().split('/').pop();
		fs.readFile('../Website/js/'+fileName, function read(err, data){
			if(err){
				console.log(err);
			}
			res.writeHead(200, {"Content-Type": "text/javascript"});
			res.end(data);
		});
	}
	else{
		console.log("No request handler found for: "+pathname);
		res.writeHead(200, {'Content-Type': 'text/html'});
	}
}
exports.route = route;