const express = require('express');
const app = express();

let ship = {
  "caliber25": 0,
  "caliber30": 0,
  "caliber50": 0,
  "shipstatus": "empty",
  "ready": false
};
let maxAmmo = 12500;

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

app.get('/rocket/', (req, res) => {
  res.status(200).json(ship);
});

app.get('/rocket/fill', (req, res) => {
  if (req.query.caliber != undefined && req.query.amount != undefined){
    let amountToFill = Number(req.query.amount);
    let actualAmmo;
    if (ship.shipstatus === 'empty'){
      actualAmmo = 0;
    } else if (ship.shipstatus != 'full' || ship.shipstatus != 'overloaded'){
      actualAmmo = (Number(ship.shipstatus.substring(0,2)) / 100) * maxAmmo;
    } else if (ship.shipstatus === 'full' || ship.shipstatus != 'overloaded'){
      actualAmmo = maxAmmo;
    }

    actualAmmo += amountToFill;
    let fillPercent = Math.round((actualAmmo / maxAmmo) * 100);
    if (fillPercent <= 0){
      ship.shipstatus = 'empty';
    } else if (fillPercent < 100){
      ship.shipstatus = fillPercent + '%';
    } else if (fillPercent === 100){
      ship.shipstatus = 'full';
      ship.ready = true;
    } else {
      ship.shipstatus = 'overloaded';
      ship.ready = false;
    }

    if (req.query.caliber === '.50'){
      ship.caliber50 = Number(ship.caliber50) + amountToFill;
    }
    if (req.query.caliber === '.30'){
      ship.caliber30 = Number(ship.caliber30) + amountToFill;
    }
    if (req.query.caliber === '.25'){
      ship.caliber25 = Number(ship.caliber25) + amountToFill;
    }
    res.status(200).json(ship);
  } else {
    let err = {};
    err.message = 'Give me valid data!';
    res.status(400).json(err);
  }
});

module.exports = app;