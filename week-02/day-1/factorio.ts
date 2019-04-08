'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(input: number = 10): number {
  let res: number = 1;
  for (let i = 1; i <= input; i++) {
    res *= i;
  }
  return res;
}

console.log(factorio(5));
