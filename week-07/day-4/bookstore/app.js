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
  var queryText = '';
  if (!req.query.category && !req.query.publisher && !req.query.plt && !req.query.pgt){
    dbQeury(';', res);
  } else {
    queryText += ' WHERE ';
    for (let i = 0; i < Object.keys(req.query).length; i++){
      if (queryText.length === 7){
        if (req.query.category){
          queryText += ` cate_descrip LIKE '%${req.query.category}%'`;
        } else if (req.query.publisher){
          queryText += ` pub_name LIKE '%${req.query.publisher}%'`;
        } else if (req.query.plt){
          queryText += ` book_price < ${req.query.plt}`;
        } else if (req.query.pgt){
          queryText += ` book_price > ${req.query.pgt}`;
        }
      } else {
        if (req.query.category){
          queryText += ` AND cate_descrip LIKE '%${req.query.category}%'`;
        }
        if (req.query.publisher){
          queryText += ` AND pub_name LIKE '%${req.query.publisher}%'`;
        }
        if (req.query.plt){
          queryText += ` AND book_price < ${req.query.plt}`;
        }
        if (req.query.pgt){
          queryText += ` AND book_price > ${req.query.pgt}`;
        }
      }
    }
    console.log(queryText);
    dbQeury(queryText + ';', res);
  }
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

function dbQeury(query, res){
  var queryBase = 'SELECT book_name,aut_name,cate_descrip,pub_name,book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id';
  connection.query(queryBase + query,
    function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    console.log('Data received from Db');
    res.send(rows);
  });
}
