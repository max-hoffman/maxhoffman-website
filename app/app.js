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

//store the data file as a variable
var dataFile = require('./data/poems.json')

//set environment variable for our application
app.set('port', process.env.PORT || 3000);

//load main route page, excecute funciton (literal)
//recieve request, give response
app.get('/', function (req, res) {

	var info = '';
	dataFile.poems.forEach(function(poem) {
		var poemText = poem.text.join('</br>');
		info += `
			<h1> ${poem.title} </h1>
			<h4> By: ${poem.author} </h4>
			<h5> ${poem.date} </h5>
			<p> ${poemText}
		`;
	});

	//don't have to worry about mime type, can type in html here
  res.send(`
  	<h1> My poems </h1>
  	${info}
  	`);
});


var server = app.listen(app.get('port'), function () {
	//call back to write to console
  console.log('Example app listening on port' + app.get('port'));
});


