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
function req404Error(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./html/404error.html").pipe(res);
}

function getProjects(req, res){
	var con = mysql.createConnection({
		host: 'sql12.freemysqlhosting.net',
		port: '3306',
		user: 'sql12267999',
		password: 'FgSY66flID',
		database: 'sql12267999'
	});
	
	con.connect(function(err){
		if(err){
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end(null);
			console.log(err);
		}else{
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
		}
		
	});
}
function getCurrent(req, res){
	var con = mysql.createConnection({
		host: 'sql12.freemysqlhosting.net',
		port: '3306',
		user: 'sql12267999',
		password: 'FgSY66flID',
		database: 'sql12267999'
	});
	
	con.connect(function(err){
		if(err){
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end(null);
			console.log(err);
		} 
		con.query("SELECT * FROM projects WHERE complete='Ongoing'", function(err, result){
			if(err){
				res.writeHead(200, {"Content-Type": "text/plain"});
				res.end(null);
				console.log(err);
			}else{
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
			} 
						
		});
	});	
}

function getMoreInfo(req, res, postData){
	var parseData = qs.parse(postData);
	
	var con = mysql.createConnection({
		host: 'sql12.freemysqlhosting.net',
		port: '3306',
		user: 'sql12267999',
		password: 'FgSY66flID',
		database: 'sql12267999'
	});
	
	con.connect(function(err){
		if(err){
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end(null);
			console.log(err);
		}
		con.query("SELECT * FROM projects LEFT JOIN projectslong ON projects.id=projectslong.proID LEFT JOIN skills ON projects.id = skills.proid WHERE title='"+parseData.title+"'", function(err, result){
			if(err){
				res.writeHead(200, {"Content-Type": "text/plain"});
				res.end(null);
				console.log(err);
			}else{
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
					project.push(result[i].skills+";");			
				}		
				con.end();
				res.writeHead(200, {"Content-Type": "text/plain"});
				res.end(project.toString());
			} 				
		});
	});	
}

function reqSkills(req, res){
	var con = mysql.createConnection({
		host: 'sql12.freemysqlhosting.net',
		port: '3306',
		user: 'sql12267999',
		password: 'FgSY66flID',
		database: 'sql12267999'
	});
	con.connect(function(err){
		if(err){
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end(null);
			console.log(err);
		} 
		con.query("SELECT * FROM skills LEFT JOIN projects ON skills.proid = projects.id", function(err, result){
			if(err){
				res.writeHead(200, {"Content-Type": "text/plain"});
				res.end(null);
				console.log(err);
			}else{
				var skillTags = {};
				for(var i = 0; i < result.length; i++){				
					var resultString = result[i].skills.toString();
					var splitObj = resultString.split(',');
					for(var j = 0; j < splitObj.length; j++){
						if(skillTags[splitObj[j]] == null){
							skillTags[splitObj[j]] = {number: 1, title: result[i].title};
						}else{
							skillTags[splitObj[j]].number = skillTags[splitObj[j]].number +1;
							skillTags[splitObj[j]].title = skillTags[splitObj[j]].title+","+ result[i].title;
						}
					}			
				}	
			console.log(JSON.stringify(skillTags));
			con.end();
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end(JSON.stringify(skillTags));
			} 					
		});
	});	
}

exports.reqIndex = reqIndex;
exports.reqProjects = reqProjects;
exports.reqAbout = reqAbout;
exports.reqNav = reqNav;
exports.reqFoot = reqFoot;
exports.reqSkills = reqSkills;
exports.req404Error = req404Error;
exports.getProjects = getProjects;
exports.getCurrent = getCurrent;
exports.getMoreInfo = getMoreInfo;
