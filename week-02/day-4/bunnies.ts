'use strict';

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies
// recursively (without loops or multiplication).

function bunnyCounter(x: number): number {
  if (x === 1) {
    return 2;
  }
  return (2 + bunnyCounter(x - 1));
}

console.log(bunnyCounter(15));
