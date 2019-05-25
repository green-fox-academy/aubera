//jshint esversion:6

const dotenv = require('dotenv').config();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;
let post_id;
let userName;
let queryText;
let statCode;
let successMsg;
let title;
let url;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/posts ', (req, res) => {
  // FIXME: let query = ''; //Here should be two queries a user specific and a non-user specific.
  connection.query(`SELECT  p1.post_id, p1.title, p1.url, p1.timestamp, CASE WHEN (SELECT SUM(vote) ` +
    `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) IS NOT NULL THEN (SELECT SUM(vote) ` +
    `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) ELSE 0 END AS score, ` +
    `p1.owner_name, CASE WHEN p2.vote IS NULL THEN 0 ELSE p2.vote END AS vote FROM posts p1 ` +
    `LEFT JOIN (SELECT p.post_id, p.title, p.url, p.timestamp, p.owner_name, v.vote FROM posts p JOIN votes v ON p.post_id = v.post_id ` +
    `WHERE v.user_name = '${req.headers.username}') AS p2 ON p1.post_id = p2.post_id;`,
    function(err, rows) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      console.log('Data successfully extracted from db');
      res.status(200).json(rows);
    }
  );
});

app.post('/posts', (req, res) => {
  title = req.body.title;
  url = req.body.url;
  userName = req.headers.username;
  connection.query(`INSERT INTO posts (title, url, owner_name) VALUES ('${title}', '${url}', '${userName}');`,
    function(err) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error, not imported');
        return;
      } else {
        // FIXME: Here should change the query for getting the score as well!
        connection.query(`SELECT * FROM posts ORDER BY post_id DESC LIMIT 1;`,
          function(error, rows) {
            if (error) {
              console.log(error.toString());
              res.status(500).send('Database error');
              return;
            } else {
              console.log('Post imported to database');
              res.status(201).json(rows);
            }
          }
        );
      }
    }
  );
});

app.put('/posts/:id/upvote', (req, res) => {
  post_id = req.params.id;
  userName = req.headers.username;
  connection.query(`SELECT vote FROM votes WHERE post_id = ${post_id} AND user_name = '${userName}';`,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        res.status(500).send('Database error');
        return;
      } else {
        if (rows.length === 0) {
          queryText = `INSERT INTO votes (post_id, user_name, vote) VALUES (${post_id}, '${userName}', 1);`;
          statCode = 201;
          successMsg = 'Vote imported to database';
          queryDBNoResponse(queryText, successMsg);
          getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
        }
        if (rows[0].vote === 1) {
          queryText = `UPDATE votes SET vote = 0 WHERE post_id = ${post_id} AND user_name = '${userName}';`;
          statCode = 201;
          successMsg = 'Vote updated in database';
          queryDBNoResponse(queryText, successMsg);
          getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
        }
        if (rows[0].vote === -1 || rows[0].vote === 0) {
          queryText = `UPDATE votes SET vote = 1 WHERE post_id = ${post_id} AND user_name = '${userName}';`;
          statCode = 201;
          successMsg = 'Vote updated in database';
          queryDBNoResponse(queryText, successMsg);
          getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
        }
      }
    }
  );
});

app.put('/posts/:id/downvote', (req, res) => {
  post_id = req.params.id;
  userName = req.headers.username;
  connection.query(`SELECT vote FROM votes WHERE post_id = ${post_id} AND user_name = '${userName}';`,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        res.status(500).send('Database error');
        return;
      } else {
        if (rows.length === 0) {
          queryText = `INSERT INTO votes (post_id, user_name, vote) VALUES (${post_id}, '${userName}', -1);`;
          statCode = 201;
          successMsg = 'Vote imported to database';
          queryDBNoResponse(queryText, successMsg);
          getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
        }
        if (rows[0].vote === -1) {
          queryText = `UPDATE votes SET vote = 0 WHERE post_id = ${post_id} AND user_name = '${userName}';`;
          statCode = 201;
          successMsg = 'Vote updated in database';
          queryDBNoResponse(queryText, successMsg);
          getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
        }
        if (rows[0].vote === 1 || rows[0].vote === 0) {
          queryText = `UPDATE votes SET vote = -1 WHERE post_id = ${post_id} AND user_name = '${userName}';`;
          statCode = 201;
          successMsg = 'Vote updated in database';
          queryDBNoResponse(queryText, successMsg);
          getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
        }
      }
    }
  );
});

app.delete('/posts/:id', (req, res) => {
  post_id = req.params.id;
  userName = req.headers.username;
  let postToDelete;
  connection.query(`SELECT owner_name FROM posts WHERE post_id = ${post_id};`,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        res.status(500).send('Database error');
        return;
      } else {
        if (rows.length === 0){
          res.status(404).send('Post not found');
          return;
        } else if (rows[0].owner_name != userName){
          res.status(401).send('Unauthorized user');
          return;
        } else {
          connection.query(`SELECT  p1.post_id, p1.title, p1.url, p1.timestamp, CASE WHEN (SELECT SUM(vote) ` +
            `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) IS NOT NULL THEN (SELECT SUM(vote) ` +
            `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) ELSE 0 END AS score, ` +
            `p1.owner_name, CASE WHEN p2.vote IS NULL THEN 0 ELSE p2.vote END AS vote FROM posts p1 ` +
            `LEFT JOIN (SELECT p.post_id, p.title, p.url, p.timestamp, p.owner_name, v.vote FROM posts p JOIN votes v ON p.post_id = v.post_id ` +
            `WHERE v.user_name = '${userName}') AS p2 ON p1.post_id = p2.post_id WHERE p1.post_id = ${post_id};`,
            function(err, rows) {
              if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
              }
              console.log('Post temporarily saved');
              postToDelete = rows;
            }
          );
          connection.query(`DELETE FROM posts WHERE post_id = ${post_id};`,
            function(err, rows) {
              if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
              }
              console.log('Post successfully deleted from database');
              res.status(200).json(postToDelete);
            }
          );
        }
      }
    }
  );
});

app.put('/posts/:id', (req, res) => {
  post_id = req.params.id;
  userName = req.headers.username;
  title = req.body.title;
  url = req.body.url;
  let postToDelete;
  connection.query(`SELECT owner_name FROM posts WHERE post_id = ${post_id};`,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        res.status(500).send('Database error');
        return;
      } else {
        if (rows.length === 0){
          res.status(404).send('Post not found');
          return;
        } else if (rows[0].owner_name != userName){
          res.status(401).send('Unauthorized user');
          return;
        } else {
          queryText = `UPDATE posts SET title = '${title}', url = '${url}' WHERE post_id = ${post_id};`;
          statCode = 201;
          successMsg = 'Post updated in database';
          queryDBNoResponse(queryText, successMsg);
          getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
        }
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

function createTable() {
  return 'CREATE TABLE `posts` (`post_id` INT NOT NULL AUTO_INCREMENT,`title` VARCHAR(255) NOT NULL,`url` VARCHAR(255) NOT NULL,`timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`score` INT(20) DEFAULT 0, `owner_name` VARCHAR(100) NOT NULL, PRIMARY KEY (`post_id`));';
}

function queryDBWithResponse(sqlQuery, statCode, successMsg, res) {
  connection.query(sqlQuery,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        res.status(500).send('Database error');
        return;
      } else {
        console.log(successMsg);
        res.status(statCode).json(rows);
      }
    }
  );
}

function queryDBNoResponse(sqlQuery, successMsg) {
  connection.query(sqlQuery,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        return;
      } else {
        console.log(successMsg);
      }
    }
  );
}

function getSelectedPostForUser(userName, post_id, statCode, successMsg, res) {
  connection.query(`SELECT  p1.post_id, p1.title, p1.url, p1.timestamp, CASE WHEN (SELECT SUM(vote) ` +
    `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) IS NOT NULL THEN (SELECT SUM(vote) ` +
    `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) ELSE 0 END AS score, ` +
    `p1.owner_name, CASE WHEN p2.vote IS NULL THEN 0 ELSE p2.vote END AS vote FROM posts p1 ` +
    `LEFT JOIN (SELECT p.post_id, p.title, p.url, p.timestamp, p.owner_name, v.vote FROM posts p JOIN votes v ON p.post_id = v.post_id ` +
    `WHERE v.user_name = '${userName}') AS p2 ON p1.post_id = p2.post_id WHERE p1.post_id = ${post_id};`,
    function(err, rows) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      console.log(successMsg);
      res.status(statCode).json(rows);
    }
  );
}

//select all posts voted by user
//SELECT  p1.post_id, p1.title, p1.url, p1.timestamp, CASE WHEN (SELECT SUM(vote) FROM votes WHERE post_id = p1.post_id GROUP BY post_id) IS NOT NULL THEN (SELECT SUM(vote) FROM votes WHERE post_id = p1.post_id GROUP BY post_id) ELSE 0 END AS score, p1.owner_name, CASE WHEN p2.vote IS NULL THEN 0 ELSE p2.vote END AS vote FROM posts p1 LEFT JOIN (SELECT p.post_id, p.title, p.url, p.timestamp, p.owner_name, v.vote FROM posts p JOIN votes v ON p.post_id = v.post_id WHERE v.user_name = 'juli') AS p2 ON p1.post_id = p2.post_id;