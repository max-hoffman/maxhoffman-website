
//require the express library; let's use create an instance of module
var express = require('express');

//initialize instance of express library so that we can call those functions
var app = express();

// //store the data (JSON) file of poems as a variable
var dataFile = require('./data/poems.json')

// //set environment variable for our application
app.set('port', process.env.PORT || 8080);
app.set('appData',dataFile)

// //routes
app.use(require('./routes/index'));
app.use(require('./routes/poems'));

//server active
var server = app.listen(app.get('port'), function () {
	//call back to write to console
  console.log('Example app listening on port' + app.get('port'));
});


