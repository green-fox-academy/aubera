'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size: number = 4;
let matrix: number[][] = [];
let line: number[];
let diagonal: number = size - 1;

for (let i: number = 0; i < size; i++) {
  matrix[i] = [];
  for (let j: number = 0; j < size; j++) {
    matrix[i][j] = 0;
  }
  matrix[i][diagonal] = 1;
  diagonal--;
}

console.log(matrix);
