//jshint esversion: 6

const express = require('express');
const app = express();
const PORT = 3000;

const images = [
  {title: 'Stone fern', src: '/assets/PA112754_1.jpg', description: 'Some nice description'},
  {title: 'High castle', src: '/assets/PA112556_1.jpg', description: 'Some nice description'},
  {title: 'Before sunrise', src: '/assets/PA122941_1.jpg', description: 'Some nice description'},
  {title: '50 shades of grey', src: '/assets/PA112770_1.jpg', description: 'Some nice description'},
  {title: 'Over the trees', src: '/assets/PA112787_1.jpg', description: 'Some nice description'},
  {title: 'Look there', src: '/assets/PA112824_1.jpg', description: 'CaptionBot: "I think it\'s a man standing in front of a mountain."'},
  {title: 'Sunrise', src: '/assets/PA122918_1.jpg', description: 'Some nice description'},
  {title: 'Water fall', src: '/assets/PA112411_1.jpg', description: 'Some nice description'},
];

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/', express.static('./'));

app.get('/', (req, res) => {
  res.render('index', {images: images});
});

app.listen(PORT, () => {
  console.log(`Carousel is listening on port ${PORT}`);
});
