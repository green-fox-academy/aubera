//jshint esversion: 6

const dotenv = require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.listen(PORT, () => {
  console.log(`Reddit app is listening on port ${PORT}`);
});