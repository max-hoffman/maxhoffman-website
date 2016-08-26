var express = require('express')
var router = express.Router();

//poems route
router.get('/poems', function (req, res) {

	//request data file from main app
	var dataFile = req.app.get('appData');

	//empty text body variable
	var body = '';

	//make text body
	dataFile.poems.forEach(function(poem) {
		var poemText = poem.text.join('</br>');
		body += `
			<h3> ${poem.title} </h3>
			<h4> By: ${poem.author} </h4>
			<h5> ${poem.date} </h5>
			<p> ${poemText} </p>
		`;
	});

	//send the text body to the webpage
	//don't have to worry about mime type, can type in html here
  res.send(`
  	<h1> My poems </h1>
  	${body}
  	`);
});

//page for individual poem
router.get('/poems/:poemid', function (req, res) {

	//request data file from the main app
	var dataFile = req.app.get('appData');

	//select particular poem using array notation in browser ID
	var poem = dataFile.poems[req.params.poemid];

	//construct actual poem test from the subarray in the JSON file
	var poemText = poem.text.join('</br>');

	//don't have to worry about mime type, can type in html here
  res.send(`
  	<h3> ${poem.title} </h3>
	<h4> by: ${poem.author} </h4>
	<h5> ${poem.date} </h5>
	<p> ${poemText} </p>
  	`);
});

module.exports = router