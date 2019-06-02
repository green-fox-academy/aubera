//jshint esversion:6

const dotenv = require('dotenv').config();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
let post_id;
let userName;
let queryText;
let statCode;
let successMsg;
let title;
let url;

app.use(cors('*'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('/Users/auber.andor/greenfox/aubera/week-08/day-5/reddit-frontend/public'));

app.get('/', (req, res) => {
  res.sendFile('/Users/auber.andor/greenfox/aubera/week-08/day-5/reddit-frontend/public/views/index.html');
});

app.get('/posts', (req, res) => {
  !req.headers.username ? userName = '' : userName = req.headers.username;
  connection.query(`SELECT  p1.post_id, p1.title, p1.url, unix_timestamp(p1.timestamp) AS 'timestamp', CASE WHEN (SELECT SUM(vote) ` +
    `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) IS NOT NULL THEN (SELECT SUM(vote) ` +
    `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) ELSE 0 END AS score, ` +
    `p1.owner_name, CASE WHEN p2.vote IS NULL THEN 0 ELSE p2.vote END AS vote FROM posts p1 ` +
    `LEFT JOIN (SELECT p.post_id, p.title, p.url, p.timestamp, p.owner_name, v.vote FROM posts p JOIN votes v ON p.post_id = v.post_id ` +
    `WHERE v.user_name = '${userName}') AS p2 ON p1.post_id = p2.post_id;`,
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
  console.log(req.body);
  userName = req.headers.username;
  connection.query(`SELECT user_name FROM users WHERE user_name = '${userName}';`,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        res.status(500).send('Database error');
        return;
      } else {
        if (rows.length === 0){
          // these lines are intentionally commented out until the user registration will be created
          // res.status(404).send('User not found');
          // return;
          console.log('No such user');
        }
        // else {
        connection.query(`INSERT INTO posts (title, url, owner_name) VALUES ('${title}', '${url}', '${userName}');`,
          function(err) {
            if (err) {
              console.log(err.toString());
              res.status(500).send('Database error, not imported');
              return;
            } else {
              connection.query(`SELECT  p1.post_id, p1.title, p1.url, unix_timestamp(p1.timestamp) AS 'timestamp', CASE WHEN (SELECT SUM(vote) ` +
                `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) IS NOT NULL THEN (SELECT SUM(vote) ` +
                `FROM votes WHERE post_id = p1.post_id GROUP BY post_id) ELSE 0 END AS score, ` +
                `p1.owner_name, CASE WHEN p2.vote IS NULL THEN 0 ELSE p2.vote END AS vote FROM posts p1 ` +
                `LEFT JOIN (SELECT p.post_id, p.title, p.url, p.timestamp, p.owner_name, v.vote FROM posts p JOIN votes v ON p.post_id = v.post_id ` +
                `WHERE v.user_name = '${userName}') AS p2 ON p1.post_id = p2.post_id ORDER BY p1.post_id DESC LIMIT 1;`,
                function(err, rows) {
                  if (err) {
                    console.log(err.toString());
                    res.status(500).send('Database error');
                    return;
                  }
                  console.log('Post added to database');
                  res.status(201).json(rows);
                }
              );
            }
          }
        );
      // }
      }
    }
  );
});

app.put('/posts/:id/upvote', (req, res) => {
  post_id = req.params.id;
  userName = req.headers.username;
  connection.query(`SELECT user_name FROM users WHERE user_name = '${userName}';`,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        res.status(500).send('Database error');
        return;
      } else {
        if (rows.length === 0){
          res.status(404).send('User not found');
          return;
        } else {
          connection.query(`SELECT post_id FROM posts WHERE post_id = ${post_id};`,
            function(error, rows) {
              if (error) {
                console.log(error.toString());
                res.status(500).send('Database error');
                return;
              } else {
                if (rows.length === 0){
                  res.status(404).send('Post not found');
                  return;
                } else {
                  connection.query(`SELECT vote FROM votes WHERE post_id = ${post_id} AND user_name = '${userName}';`,
                  function(error, data) {
                    if (error) {
                      console.log(error.toString());
                      res.status(500).send('Database error');
                      return;
                    } else {
                      if (data.length === 0) {
                        queryText = `INSERT INTO votes (post_id, user_name, vote) VALUES (${post_id}, '${userName}', 1);`;
                        statCode = 201;
                        successMsg = 'Vote added to database';
                        queryDBNoResponse(queryText, successMsg);
                        getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
                      }
                      else if (data[0].vote === 1) {
                        queryText = `UPDATE votes SET vote = 0 WHERE post_id = ${post_id} AND user_name = '${userName}';`;
                        statCode = 201;
                        successMsg = 'Vote updated in database';
                        queryDBNoResponse(queryText, successMsg);
                        getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
                      }
                      else if (data[0].vote === -1 || data[0].vote === 0) {
                        queryText = `UPDATE votes SET vote = 1 WHERE post_id = ${post_id} AND user_name = '${userName}';`;
                        statCode = 201;
                        successMsg = 'Vote updated in database';
                        queryDBNoResponse(queryText, successMsg);
                        getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
                      }
                    }
                  }
                );
                }
              }
            }
          );
        }
      }
    }
  );
});

app.put('/posts/:id/downvote', (req, res) => {
  post_id = req.params.id;
  userName = req.headers.username;
  connection.query(`SELECT user_name FROM users WHERE user_name = '${userName}';`,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        res.status(500).send('Database error');
        return;
      } else {
        if (rows.length === 0){
          res.status(404).send('User not found');
          return;
        } else {
          connection.query(`SELECT post_id FROM posts WHERE post_id = ${post_id};`,
            function(error, rows) {
              if (error) {
                console.log(error.toString());
                res.status(500).send('Database error');
                return;
              } else {
                if (rows.length === 0){
                  res.status(404).send('Post not found');
                  return;
                } else {
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
                        successMsg = 'Vote added to database';
                        queryDBNoResponse(queryText, successMsg);
                        getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
                      }
                      else if (rows[0].vote === -1) {
                        queryText = `UPDATE votes SET vote = 0 WHERE post_id = ${post_id} AND user_name = '${userName}';`;
                        statCode = 201;
                        successMsg = 'Vote updated in database';
                        queryDBNoResponse(queryText, successMsg);
                        getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
                      }
                      else if (rows[0].vote === 1 || rows[0].vote === 0) {
                        queryText = `UPDATE votes SET vote = -1 WHERE post_id = ${post_id} AND user_name = '${userName}';`;
                        statCode = 201;
                        successMsg = 'Vote updated in database';
                        queryDBNoResponse(queryText, successMsg);
                        getSelectedPostForUser(userName, post_id, statCode, successMsg, res);
                      }
                    }
                  }
                );
                }
              }
            }
          );
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
          connection.query(`SELECT  p1.post_id, p1.title, p1.url, unix_timestamp(p1.timestamp) AS 'timestamp', CASE WHEN (SELECT SUM(vote) ` +
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

app.get('/login', (req, res) => {
  res.status(200).sendFile('/Users/auber.andor/greenfox/aubera/week-08/day-5/reddit-frontend/public/views/login.html');
});

app.post('/login', (req, res) => {
  let {username, password} = req.headers;
  connection.query(`SELECT user_name FROM users WHERE user_name = '${username}';`,
    function(error, rows) {
      if (error) {
        console.log(error.toString());
        res.status(500).send('Database error');
        return;
      } else {
        if (rows.length === 0){
          connection.query(`INSERT INTO users (user_name, password) VALUES ('${username}', '${password}');`,
            function(error){
              if (error) {
                console.log(error.toString());
                res.status(500).send('Database error');
                return;
              } else {
                connection.query(`SELECT user_name FROM users WHERE user_name = '${username}'`,
                  function(error, rows){
                    if (error) {
                      console.log(error.toString());
                      res.status(500).send('Database error');
                      return;
                    } else {
                      res.status(201).json(rows);
                    }
                  }
                );
              }
            }
          );
        } else {
          connection.query(`SELECT password FROM users WHERE user_name = '${username}';`,
            function(error, rows) {
              if (error) {
                console.log(error.toString());
                res.status(500).send('Database error');
                return;
              } else {
                if (password != rows[0].password){
                  res.status(401).send('Bad password');
                  return;
                } else {
                  res.status(200).json([{user_name: username}]);
                }
              }
            }
          );
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
  connection.query(`SELECT  p1.post_id, p1.title, p1.url, unix_timestamp(p1.timestamp) AS 'timestamp', CASE WHEN (SELECT SUM(vote) ` +
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