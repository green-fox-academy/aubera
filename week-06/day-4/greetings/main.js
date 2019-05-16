//jshint esversion: 6

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var name = '';
  if (req.query.name != undefined){
    name = req.query.name[0].toUpperCase() + req.query.name.slice(1);
  } else {
    name = 'Guest';
  }
  res.render('home', {
    name: name
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
