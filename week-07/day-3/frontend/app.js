//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('assets'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  var data = {};
  if (req.query.input && !isNaN(req.query.input)) {
    data = {
      'received': req.query.input,
      'result': req.query.input * 2
    };
  } else {
    data = {
      "error": "Please provide an input!"
    };
  }
  res.send({
    data: data
  });
});

app.get('/greeter', (req, res) => {
  var data = {};
  if (!req.query.name && !req.query.title) {
    data = {
      "error": "Please provide a name and a title!"
    };
  } else if (!req.query.name) {
    data = {
      "error": "Please provide a name!"
    };
  } else if (!req.query.title) {
    data = {
      "error": "Please provide a title!"
    };
  } else {
    data = {
      'welcome_message': 'Oh, hi there ' + req.query.name + ', my dear ' + req.query.title + '!'
    };
  }
  res.send({
    data: data
  });
});

app.get('/appenda/:appendable', (req, res) => {
  var data = {
    "appended": req.params.appendable + 'a'
  };
  res.send(data);
});

app.post('/dountil/:action', (req, res) => {
  var data = {};
  if (req.params.action === 'sum'){
    data = {"result" : sumTo(req.body.until)};
  } else if (req.params.action === 'factor'){
    data = {"result" : multiplyTo(req.body.until)};
  }
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

function multiplyTo(n) {
  if (n == 1) return 1;
  return n * sumTo(n - 1);
}
