//index.js
"use strict";

var fs = require("fs");
var qs = require('querystring');
var mysql = require('mysql');

function reqIndex(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./html/index.html").pipe(res);
}
function reqProjects(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./html/projects.html").pipe(res);
}
function reqAbout(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./html/about.html").pipe(res);
}
function reqNav(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./html/navbar.html").pipe(res);
}
function reqFoot(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./html/footer.html").pipe(res);
}

function getProjects(req, res){
	var con = mysql.createConnection({
		host: process.env.RDS_HOSTNAME,
		port: process.env.RDS_PORT,
		user: process.env.RDS_USERNAME,
		password: process.env.RDS_PASSWORD,
		database: process.env.RDS_DB_NAME
	});
	
	con.connect(function(err){
		if(err) throw err;
		con.query("SELECT * FROM projects ORDER BY id DESC", function(err, result){
			if(err) throw err;
			var project = [];
			for(var i = 0; i < result.length; i++){
				project.push(result[i].title+";");
				project.push(result[i].complete+";");
				project.push(result[i].info+";");
				project.push(result[i].ProjectTime+";");
				project.push(result[i].ProjectPic+";");
			}
			con.end();
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end(project.toString());
		});
	});
	
}
function getCurrent(req, res){
	var con = mysql.createConnection({
		host: process.env.RDS_HOSTNAME,
		port: process.env.RDS_PORT,
		user: process.env.RDS_USERNAME,
		password: process.env.RDS_PASSWORD,
		database: process.env.RDS_DB_NAME
	});
	
	con.connect(function(err){
		if(err) throw err;
		con.query("SELECT * FROM projects WHERE complete='Ongoing'", function(err, result){
			if(err) throw err;
			var project = [];
			for(var i = 0; i < result.length; i++){
				project.push(result[i].title+";");
				project.push(result[i].complete+";");
				project.push(result[i].info+";");
				project.push(result[i].ProjectTime+";");
				project.push(result[i].ProjectPic+";");
				
			}		
			con.end();
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end(project.toString());			
		});
	});	
}

function getMoreInfo(req, res, postData){
	var parseData = qs.parse(postData);
	console.log(parseData.title);
	
	var con = mysql.createConnection({
		host: process.env.RDS_HOSTNAME,
		port: process.env.RDS_PORT,
		user: process.env.RDS_USERNAME,
		password: process.env.RDS_PASSWORD,
		database: process.env.RDS_DB_NAME
	});
	
	con.connect(function(err){
		if(err) throw err;
		con.query("SELECT * FROM projects LEFT JOIN projectslong ON projects.id=projectslong.proID WHERE title='"+parseData.title+"'", function(err, result){
			if(err) throw err;
			var project = [];
			for(var i = 0; i < result.length; i++){
				project.push(result[i].title+";");
				project.push(result[i].complete+";");
				if(result[i].allInfo!= null){
					project.push(result[i].allInfo+";");
				}else{
					project.push(result[i].info+";");
				}	
				project.push(result[i].ProjectTime+";");
				project.push(result[i].ProjectPic+";");
				
			}		
			con.end();
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end(project.toString());			
		});
	});	
}

exports.reqIndex = reqIndex;
exports.reqProjects = reqProjects;
exports.reqAbout = reqAbout;
exports.reqNav = reqNav;
exports.reqFoot = reqFoot;
exports.getProjects = getProjects;
exports.getCurrent = getCurrent;
exports.getMoreInfo = getMoreInfo;
