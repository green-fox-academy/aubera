//jshint esversion: 6

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  var data = {};
  if (req.query.input && !isNaN(req.query.input)){
    data = {
      'received': req.query.input,
      'result': req.query.input * 2
    };
  } else {
    data = {
      "error": "Please provide an input!"
    };
  }
  res.send({data: data});
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
