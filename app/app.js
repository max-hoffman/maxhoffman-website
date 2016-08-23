
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



	//don't have to worry about mime type, can type in html here
  res.send(`
  	<h1> Welcome </h1>
  	<p> I use this space to collect my thoughts, keep track of projects, and post data. </p>
  	`);
});

//poems route
app.get('/poems', function (req, res) {

	var info = '';
	dataFile.poems.forEach(function(poem) {
		var poemText = poem.text.join('</br>');
		info += `
			<h3> ${poem.title} </h3>
			<h4> By: ${poem.author} </h4>
			<h5> ${poem.date} </h5>
			<p> ${poemText} </p>
		`;
	});

	//don't have to worry about mime type, can type in html here
  res.send(`
  	<h1> My poems </h1>
  	${info}
  	`);
});

//page for individual poem
app.get('/poems/:poemid', function (req, res) {

	var poem = dataFile.poems[req.params.poemid];
	var poemText = poem.text.join('</br>');
	//don't have to worry about mime type, can type in html here
  res.send(`
  	<h3> ${poem.title} </h3>
	<h4> by: ${poem.author} </h4>
	<h5> ${poem.date} </h5>
	<p> ${poemText} </p>
  	`);
});

//server active
var server = app.listen(app.get('port'), function () {
	//call back to write to console
  console.log('Example app listening on port' + app.get('port'));
});


