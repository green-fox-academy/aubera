//jshint esversion: 6

const pictures = [
  {title: 'Stone fern', src: '/assets/PA112754_1.jpg', description: 'Some nice description'},
  {title: 'High castle', src: '/assets/PA112556_1.jpg', description: 'Some nice description'},
  {title: 'Before sunrise', src: '/assets/PA122941_1.jpg', description: 'Some nice description'},
  {title: '50 shades of grey', src: '/assets/PA112770_1.jpg', description: 'Some nice description'},
  {title: 'Over the trees', src: '/assets/PA112787_1.jpg', description: 'Some nice description'},
  {title: 'Look there', src: '/assets/PA112824_1.jpg', description: 'CaptionBot: "I think it\'s a man standing in front of a mountain."'},
  {title: 'Sunrise', src: '/assets/PA122918_1.jpg', description: 'Some nice description'},
  {title: 'Water fall', src: '/assets/PA112411_1.jpg', description: 'Some nice description'},
];

const mainImage = document.querySelector('.image');
const mainImageTitle = document.getElementsByTagName('h3')[0];
const mainImageDescription = document.getElementsByTagName('p')[0];
var rightButton = document.querySelector('.right');
var leftButton = document.querySelector('.left');

var actualImage = 0;

function setMainImage(index) {
  mainImage.setAttribute('style', 'background-image: url(<%= images[' + index + '].src %>)');
  mainImageTitle.innerHTML = '<%= images[' + index + '].title %>';
  mainImageDescription.innerHTML = '<%= images[' + index + '].description %>';
  actualImage = index;
}

leftButton.onclick = function() {
  actualImage > 0 ? setMainImage(actualImage - 1) : setMainImage(pictures.length - 1);
};

rightButton.onclick = function() {
  actualImage < pictures.length - 1 ? setMainImage(actualImage + 1) : setMainImage(0);
};
