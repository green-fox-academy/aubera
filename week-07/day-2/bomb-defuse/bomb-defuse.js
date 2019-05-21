//jshint esversion: 6

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

const display = document.querySelector('.display');
const button = document.getElementsByTagName('button')[0];
var time = 1000;
var nIntervId;
var counter = 9;

timer();
button.onclick = () => {
  clearInterval(nIntervId);
  display.innerHTML += ' - Bomb defused! :)';
  button.setAttribute('disabled', '');
};

function timer() {
  nIntervId = setInterval(() => {
    display.innerHTML = counter;
    if (counter === 0){
      display.innerHTML = 'Bomb exploded! :(';
      clearInterval(nIntervId);
      button.setAttribute('disabled', '');
    }
    counter--;
  }, 1000);
}
