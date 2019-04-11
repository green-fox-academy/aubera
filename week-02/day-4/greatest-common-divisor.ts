'use strict';

// Find the greatest common divisor of two numbers using recursion.

function greatestCommonDivisor(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}

console.log(greatestCommonDivisor(12, 5));
