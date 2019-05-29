const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/newsletter.html');
});

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  console.log(req.body);
  res.send(`<h1>Thanks ${username}, we will send updates to ${email}</h1>`);
});

app.listen(PORT, ()=>{
  console.log(`Newsletter app is listening on port ${PORT}`);
});