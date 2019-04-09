'use strict';

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

console.log('The total spending was: ' + expenses.reduce(function(prev, next) {
  return prev += next;
}));

let greatest: number = 0;
expenses.forEach(function(element) {
  greatest > element ? greatest : greatest = element;
});
console.log(`This was the greatest expense ${greatest}`);

let smallest = greatest;
expenses.forEach(function(element) {
  smallest < element ? smallest : smallest = element;
});
console.log(`This was the cheapest spending: ${smallest}`);

let sum: number = expenses.reduce(function(prev, next) {
  return (prev += next)
});
console.log('The average spending was: ' + Math.round(sum / expenses.length));
