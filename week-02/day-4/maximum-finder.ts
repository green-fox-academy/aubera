'use strict';

// Write a function that finds the largest element of an array using recursion.

let numArray: number[] = [2, 5, 6, 1, 3, 8, 9, 9, 10, 9];

let res: number = 0;
let count: number = 0;
function maximumFinder(arr: number[]): number {
  if (count === arr.length) {
    return res;
  }
  res < arr[count] ? res = arr[count] : res;
  count++;
  return maximumFinder(arr);
}

console.log(maximumFinder(numArray));
