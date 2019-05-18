//jshint esversion: 6

const pictures = [
  {title: 'Stone fern', src: 'assets/PA112754_1.jpg', description: 'Some nice description'},
  {title: 'High castle', src: 'assets/PA112556_1.jpg', description: 'Some nice description'},
  {title: 'Before sunrise', src: 'assets/PA122941_1.jpg', description: 'Some nice description'},
  {title: '50 shades of grey', src: 'assets/PA112770_1.jpg', description: 'Some nice description'},
  {title: 'Over the trees', src: 'assets/PA112787_1.jpg', description: 'Some nice description'},
  {title: 'Look there', src: 'assets/PA112824_1.jpg', description: 'CaptionBot: "I think it\'s a man standing in front of a mountain."'},
  {title: 'Sunrise', src: 'assets/PA122918_1.jpg', description: 'Some nice description'},
  {title: 'Water fall', src: 'assets/PA112411_1.jpg', description: 'Some nice description'},
];

const body = document.getElementsByTagName('body')[0];
const mainImage = document.querySelector('.image');
const mainImageTitle = document.getElementsByTagName('h3')[0];
const mainImageDescription = document.getElementsByTagName('p')[0];
const thumbnails = document.querySelector('.thumbnails');
var rightButton = document.querySelector('.right');
var leftButton = document.querySelector('.left');
var actualImage = 0;

initPage(actualImage);

body.addEventListener("keydown", function(event){
  event.keyCode === 37 ? prevImage() : event.keyCode === 39 ? nextImage() : '';
});

leftButton.onclick = function() {
  prevImage();
};

rightButton.onclick = function() {
  nextImage();
};

function setMainImage(index) {
  mainImage.setAttribute('style', 'background-image: url(' + pictures[index].src + ')');
  mainImageTitle.innerHTML = pictures[index].title;
  mainImageDescription.innerHTML = pictures[index].description;
  for (let i = 0; i < thumbnails.getElementsByTagName('div').length; i++){
    thumbnails.getElementsByTagName('div')[i].classList.remove('selected');
  }
  thumbnails.getElementsByTagName('div')[index].classList.add('selected');
  actualImage = index;
}

function createThumbnails(index){
  var element = document.createElement('div');
  element.classList.add('element', index);
  element.onclick = function(){setMainImage(index);};
  var img = document.createElement('img');
  img.classList.add('thumb');
  img.setAttribute('src', pictures[index].src);
  element.appendChild(img);
  thumbnails.appendChild(element);
}

function initPage(index) {
  for (let i in pictures) {
    createThumbnails(i);
  }
  setMainImage(index);
}

function nextImage(){
  actualImage < pictures.length - 1 ? setMainImage(actualImage + 1) : setMainImage(0);
}

function prevImage(){
  actualImage > 0 ? setMainImage(actualImage - 1) : setMainImage(pictures.length - 1);
}