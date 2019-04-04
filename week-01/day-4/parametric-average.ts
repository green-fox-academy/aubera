'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let number: number = 5;
let sum: number = 0;

for (let i: number = 1; i <= number; i++) {
  sum += i;
}
let average: number = sum / number;
console.log(`Sum: ${sum}, Average: ${average}`)
