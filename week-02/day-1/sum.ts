'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(input: number = 10): number {
  let res: number = 0;
  for (let i = 0; i <= input; i++) {
    res += i;
  }
  return res;
}

console.log(sum(5));
