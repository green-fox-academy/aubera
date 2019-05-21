//jshint esversion: 6

const express = require('express');
const app = express();
const PORT = 3000;

app.use('/', express.static('./'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`SWAPI listening on port ${PORT}`);
});
