const dotenv = require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'guardiansofgalaxy',
  port: 3306
});

connection.connect((error) => {
  if (error) {
    console.log('Error connecting to Db', error);
    return;
  }
  console.log('Connection established');
});

function closeConnection(){
  connection.end();
}

const makeSQLQuery = (mySQLQueryText) => {
  return new Promise((resolve, reject) => {
    connection.query(mySQLQueryText ,
      function(error, data){
        error ? reject(error) : resolve(data);
      }
    );
  });
};

module.exports = { connection, closeConnection, makeSQLQuery };