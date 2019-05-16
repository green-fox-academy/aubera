//jshint esversion: 6

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
