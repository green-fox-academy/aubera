//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/translate', (req, res) => {
  if (!req.body.text || !req.body.lang) {
    res.send({
      "error": "I can't translate that!"
    });
  }
  res.send(camelizer(req.body.text, req.body.lang));
});

app.listen(PORT, () => {
  console.log(`Camelizer app listening on port ${PORT}`);
});

function camelizer(str, lang) {
  var data = {};
  if (lang === 'hu'){
    data.translated = replacer(str, "$1v$1");
    data.lang = 'teve';
  } else if (lang === 'en'){
    data.translated = replacer(str, "$1l$1g");
    data.lang = '-(V)lV+g-';
  } else {
    data.translated = 'Not supported language';
    data.lang = lang;
  }
  return data;
}

function replacer(str, gibber){
  var sentences = str.split('.');
  var dataBack = '';
  for (let i= 0; i < sentences.length - 1; i++){
    sentences[i] = sentences[i].replace(/([aáeéoóöőuúüűií])/gi, gibber).toLowerCase();
    sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    dataBack += sentences[i] + '.';
  }
  return dataBack;
}
