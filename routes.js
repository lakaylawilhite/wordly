
var express = require("express");

var app = express();

var Mysql = require("Mysql")


app.get("/", function(req, res){
	res.sendFile("views/index.html");
});

app.post("/login", function(req, res){
	//connect with database, check login credentials
	//assume login works for now

	res.sendFile("views/member.html");
});


app.listen(8080 function(){


console.log("app listening on port 8080");

	});