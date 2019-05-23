//jshint esversion: 6

const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/booktitles', (req, res) => {
  connection.query(`
    SELECT book_name,aut_name,cate_descrip,pub_name,book_price
    FROM book_mast
    INNER JOIN author ON book_mast.aut_id = author.aut_id
    INNER JOIN category ON book_mast.cate_id = category.cate_id
    INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;`,
    function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    console.log('Data received from Db');
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Bookstore app is listening on port ${PORT}`);
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
