'use strict';

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function adder(x: number): number {
  if (x === 1) {
    return 1;
  }
  return (x + adder(x - 1));
}

console.log(adder(8));
