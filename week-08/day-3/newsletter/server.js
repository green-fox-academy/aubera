const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/newsletter.html');
});

app.listen(PORT, ()=>{
  console.log(`Newsletter app is listening on port ${PORT}`);
});