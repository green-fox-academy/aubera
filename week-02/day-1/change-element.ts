'use strict';

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6];
console.log(numList[3]);

numList = numList.map(function(element) {
  if (element === 8) {
    element = 4;
  }
  return element;
});

numList = numList.map(function(element, index){
  element = index + 1;
  return element;
});

console.log(numList[3]);
