const express = require('express');
const bodyParser = require('body-parser');
const { connection, makeSQLQuery } = require('./mysql');
const app = express();

let ship = {
  "caliber25": 0,
  "caliber30": 0,
  "caliber50": 0,
  "shipstatus": "empty",
  "ready": false
};
let maxAmmo = 12500;

app.use(bodyParser.json());

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

app.get('/drax', (req, res) => {
  let getAllCalorieItemsSQL = `SELECT * FROM DraxCalorie;`;
  makeSQLQuery(getAllCalorieItemsSQL)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).send('Server error'));
});

app.post('/drax', (req, res) => {
  let {name, amount, calorie} = req.body;
  let addNewItemToCalorieTableSQL = `INSERT INTO DraxCalorie (name, amount, calorie) VALUES ('${name}', ${amount}, ${calorie});`;
  let lastItemFromCalorieTableSQL = `SELECT * FROM DraxCalorie ORDER BY id DESC LIMIT 1`;
  makeSQLQuery(addNewItemToCalorieTableSQL)
    .then(data => makeSQLQuery(lastItemFromCalorieTableSQL))
    .then(data => res.status(201).json(data))
    .catch(error => res.status(500).send('Server error'));
});

app.delete('/drax', (req, res) => {
  let {id} = req.body;
  let getSpecificItemFromCalorieTableSQL = `SELECT * FROM DraxCalorie WHERE id = ${id};`;
  let deleteSpecificItemFromCalorieTable = `DELETE FROM DraxCalorie WHERE id = ${id};`;
  let itemToDelete;
  makeSQLQuery(getSpecificItemFromCalorieTableSQL)
    .then(data => itemToDelete = data)
    .then(makeSQLQuery(deleteSpecificItemFromCalorieTable))
    .then(data => res.status(200).json(itemToDelete))
    .catch(error => res.status(500).send('Server error'));
});

app.patch('/drax', (req, res) => {
  let {id, amount} = req.body;
  let updateSpecificItemAmountInCalorieTable = `UPDATE DraxCalorie SET amount = ${amount} WHERE id = ${id};`;
  let getSpecificItemFromCalorieTableSQL = `SELECT * FROM DraxCalorie WHERE id = ${id};`;
  makeSQLQuery(updateSpecificItemAmountInCalorieTable)
    .then(data => makeSQLQuery(getSpecificItemFromCalorieTableSQL))
    .then(data => res.status(201).json(data))
    .catch(error => res.status(500).send('Server error'));
});

app.get('/awesome', (req, res) => {
  let getAllAwesomeMixTracksFromSQL = 'SELECT * FROM AwesomeMix;';
  makeSQLQuery(getAllAwesomeMixTracksFromSQL)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).send('Server error'));
});

app.post('/awesome', (req, res) => {
  let {author, title, genre, year, rating} = req.body;
  let addNewAwesomeTrackSQL = `INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("${author}", "${title}", "${genre}", ${year}, ${rating});`;
  let lastItemFromAwesomeMixSQL = `SELECT * FROM AwesomeMix ORDER BY id DESC LIMIT 1;`;
  makeSQLQuery(addNewAwesomeTrackSQL)
    .then(data => makeSQLQuery(lastItemFromAwesomeMixSQL))
    .then(data => res.status(201).json(data))
    .catch(error => res.status(500).send('Server error'));
});

app.delete('/awesome', (req, res) => {
  let {id} = req.body;
  let getSpecificItemFromAwesomeMixSQL = `SELECT * FROM AwesomeMix WHERE id = ${id};`;
  let deleteSpecificItemFromAwesomeMix = `DELETE FROM AwesomeMix WHERE id = ${id};`;
  let itemToDelete;
  makeSQLQuery(getSpecificItemFromAwesomeMixSQL)
    .then(data => itemToDelete = data)
    .then(data => makeSQLQuery(deleteSpecificItemFromAwesomeMix))
    .then(data => res.status(200).json(itemToDelete))
    .catch(error => res.status(500).send('Server error'));
});

module.exports = app;
