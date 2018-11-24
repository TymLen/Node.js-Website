//index.js
"use strict";

var mysql = require('mysql');

function giveProject(){
	var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "lunWP=H8;ke7",
	database: "Provik"
	});
	
	con.connect(function(err){
		if(err) throw err;
		console.log("Connected!");
		con.query("SELECT * FROM PROJECTS", function(err, result){
			if(err) throw err;
			console.log(result);
			var project = [result[0].title, result[0].complete, result[0].info];
			console.log(project);
			return project;
		});
	});
}
giveProject();