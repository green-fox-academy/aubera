//jshint esversion:6

const dotenv = require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.post('/', (req, res) => {
  // queryDB(deleteTable());
  // queryDB(createTable());
  // queryDB(fillTable(readCSVFile('./user.csv')));
  // exportAllSQLData();
  compareCSVtoJSON(readCSVFile('./user.csv'), readJSONFile('./table.json'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'bookinfo',
  port: 3306
});

connection.connect((error) => {
  if (error) {
    console.log('Error connecting to Db', error);
    return;
  }
  console.log('Connection established');
});

function queryDB(query) {
  connection.query(query,
    function(err, rows) {
      if (err) {
        console.log(err.toString());
        // res.status(500).send('Database error');
        return;
      }
      console.log('Data imported to db');
      // res.status(200).send('Data imported to db');
    }
  );
}

function readCSVFile(name) {
  const fileContent = fs.readFileSync(name, 'utf-8');
  let splitContent = fileContent.split('\n').map(row => row.split(','));
  return splitContent;
}

function readJSONFile(name) {
  const fileContent = fs.readFileSync(name, 'utf-8');
  return JSON.parse(fileContent);
}

function createTable() {
  let querySQL = 'CREATE TABLE `user` (' +
    '`id` INT NOT NULL AUTO_INCREMENT,' +
    '`prefix` TINYTEXT,' +
    '`first_name` CHAR(255),' +
    '`last_name` CHAR(255),' +
    '`address` CHAR(255),' +
    '`height` CHAR(255),' +
    '`bitcoin_address` CHAR(255),' +
    '`color_preference` CHAR(255),' +
    'PRIMARY KEY (`id`));';
  return querySQL;
}

function deleteTable() {
  let querySQL = 'DROP TABLE IF EXISTS `user`;';
  return querySQL;
}

function fillTable(dataFromCSV) {
  for (let i = 1; i < dataFromCSV.length; i++) {
    let query = ` INSERT INTO user` +
      ` VALUES (${dataFromCSV[i][0]}, '${dataFromCSV[i][1]}', '${dataFromCSV[i][2]}', "${dataFromCSV[i][3]}", '${dataFromCSV[i][4]}', '${dataFromCSV[i][5]}', '${dataFromCSV[i][6]}', '${dataFromCSV[i][7]}');`;
    queryDB(query);
  }
}

function exportAllSQLData() {
  let query = 'SELECT * FROM user;';
  connection.query(query, function(err, result) {
    if (err) throw err;
    fs.writeFile('table.json', JSON.stringify(result), function(err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });
}

function compareCSVtoJSON(csv, json) {
  let columns = ['id', 'prefix', 'first_name', 'last_name', 'address', 'height', 'bitcoin_address', 'color_preference'];
  for (let i = 1; i < csv.length; i++) {
    for (let j = 0; j < columns.length; j++){
      if (csv[i][j] != json[i - 1][columns[j]]) {
        console.log(`Error in line ${i} with ${columns[j]}`);
        return;
      }
    }
  }
  console.log('Everything matches');
}