var express = require('express');
var router = express.Router();

//load main route page, excecute funciton (literal)
//recieve request, give response
router.get('/', function (req, res) {

	//don't have to worry about mime type, can type in html here
  res.send(`
  	<h1> Welcome </h1>
  	<p> I use this space to collect my thoughts, keep track of projects, and post data. </p>
  	`);
});

module.exports = router;