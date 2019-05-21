//jshint esversion:6

// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored
const section = document.getElementsByTagName('section')[0];
var divs = section.getElementsByTagName('div');

for (let i = 2; i <= 100; i++) {
  var div = document.createElement('div');
  div.textContent = i;
  section.appendChild(div);
  if (i === 2) {
    divs[i - 1].classList.add('prime');
    divs[i - 2].classList.add('not-prime');
  }
}

var nIntervId;
var counter = 2;

function changeColor() {
  nIntervId = setInterval(() => {
    isPrime(counter);
    counter++;
    counter === 101 ? clearInterval(nIntervId) : '';
  }, 100);
}

changeColor();


function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      divs[num - 1].classList.add('not-prime');
      break;
    }
    if (j === num - 1) {
      divs[num - 1].classList.add('prime');
    }
  }
}
