//index.js
"use strict";

var server = require("./nodejs/server");
var router = require("./nodejs/router");
var requestHandlers = require("./nodejs/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.reqIndex;
handle["/index"] = requestHandlers.reqIndex;
handle["/projects"] = requestHandlers.reqProjects;
handle["/getProjects"] = requestHandlers.getProjects;
handle["/getCurrent"] = requestHandlers.getCurrent;
handle["/about"] = requestHandlers.reqAbout;
handle["/getMoreInfo"] = requestHandlers.getMoreInfo;

server.startServer(router.route, handle);