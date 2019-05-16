//jshint esversion: 6

var express = require('express');

var app = express();

app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
