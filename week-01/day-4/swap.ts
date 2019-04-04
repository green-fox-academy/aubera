'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

console.log('"a" is: ' + a);
console.log('"b" is: ' + b);

let swapA: number;

swapA = a;
a = b;
b = swapA;

console.log('"a" is: ' + a);
console.log('"b" is: ' + b);
