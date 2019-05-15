//jshint esversion: 6

//Turn the party on and off by clicking the button. (the whole page)

var button = document.querySelector('button');
var div = document.querySelector('div');
button.onclick = () => {
  div.classList.toggle('party');
};
