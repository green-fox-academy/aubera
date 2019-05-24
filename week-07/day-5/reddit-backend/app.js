//jshint esversion: 6

const dotenv = require('dotenv').config();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/posts', (req, res) => {
  connection.query('SELECT * FROM posts;',
    function(err, rows) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      console.log('Data successfully extracted from db');
      res.type('application/json');
      res.status(200).json(rows);
    }
  );
});

app.post('/posts', (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  let ownerName = req.headers.username;
  console.log(req.headers.contentType);
  console.log(req.headers.accept);
  connection.query(`INSERT INTO posts(title, url, owner_name) VALUES ('${title}', '${url}', '${ownerName}');`,
    function(err) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error, not imported');
        return;
      } else {
        connection.query(`SELECT * FROM posts ORDER BY post_id DESC LIMIT 1;`,
          function(error, rows) {
            if (error) {
              console.log(error.toString());
              res.status(500).send('Database error');
              return;
            } else {
              console.log('Here is the imported post');
              // res.type('application/json');
              res.status(200).json(rows);
            }
          }
        );
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Reddit app is listening on port ${PORT}`);
});

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'reddit',
  port: 3306
});

connection.connect((error) => {
  if (error) {
    console.log('Error connecting to Db', error);
    return;
  }
  console.log('Connection established');
});