//jshint esversion: 6

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const fruits = ['apple', 'pear', 'melon', 'grapes'];
const times = [0, 1000, 3000, 5000];

for (let i = 0; i < fruits.length; i++){
  multipleTimeout(fruits[i], times[i]);
}

function multipleTimeout(fruit, time){
  setTimeout(() => {
    console.log(fruit);
  }, time);
}
