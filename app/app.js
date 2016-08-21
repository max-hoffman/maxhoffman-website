// //http library that you use to handle a number of methods we need
// var http = require('http');

// //takes care of handling requests for data, and returning some information
// var myServer = http.createServer(function(request,respose) {
// 	response.writeHead(200, {"Content-Type" : "text/plain"});
// 	response.write('Max Hoffman');
// 	response.end();
// 	});

// //ask server to listen to specific port
// myServer.listen(3000);

//require the express library
var express = require('express');

//initialize instance of library, which we can call functions from
var app = express();

//load main route page, excecute funciton (literal)
//recieve request, give response
app.get('/', function (req, res) {

	//don't have to worry about mime type, can type in html here
  res.send('<h1> Rein hold has a micro dong </h1>');
});


var server = app.listen(3000, function () {
	//call back to write to console
  console.log('Example app listening on port 3000!');
});


