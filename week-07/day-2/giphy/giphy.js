//jshint esversion: 6
const divThumb = document.querySelector('.container');
const bigImg = document.querySelector('.big');

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = console.log;
xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=vpNFf0BMHekAF7NDx6JweUZdrO20aMi2&limit=16', true); // Also try http://444.hu/feed
xhr.send(null);
xhr.onload = function(data) {
  for (let i = 0; i < 16; i++){
    var img = document.createElement('img');
    img.onclick = () => {
      bigImg.setAttribute('src', JSON.parse(data.target.response).data[i].images.original.url);
    };
    img.setAttribute('src', JSON.parse(data.target.response).data[i].images.fixed_width_small_still.url);
    divThumb.appendChild(img);
  }
};
