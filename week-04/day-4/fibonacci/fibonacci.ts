'use strict';

export function getFibonacciNumber(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n = getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}
