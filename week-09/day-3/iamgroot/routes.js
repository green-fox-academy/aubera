const express = require('express');
const app = express();

app.get('/groot/', (req, res) => {
  let translate = {};
  if (req.query.message != undefined){
    translate.received = req.query.message;
    translate.translated = 'I am Groot!';
  } else {
    translate.error = 'I am Groot!';
  }
  res.status(200).json(translate);
});

app.get('/yondu/', (req, res) => {
  let calc = {};
  if (req.query.distance != undefined && req.query.time != undefined){
    if (req.query.time != 0) {
      calc.distance = Number(req.query.distance);
      calc.time = Number(req.query.time);
      calc.speed = req.query.distance / req.query.time;
      res.status(200).json(calc);
    } else {
      calc.error = 'Give me valid data!';
      res.status(400).json(calc);
    }
  } else {
    calc.error = 'Give me data!';
    res.status(400).json(calc);
  }
});

module.exports = app;