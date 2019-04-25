'use strict';

const test = require('tape').test;
import { getFibonacciNumber } from './fibonacci';

test('check the 8th number of Fibonacci', (t: any) => {
  t.equal(getFibonacciNumber(8), 21);
  t.end();
});

test('check the 0th number of Fibonacci', (t: any) => {
  t.equal(getFibonacciNumber(0), 0);
  t.end();
});

test('check the 1st number of Fibonacci', (t: any) => {
  t.equal(getFibonacciNumber(1), 1);
  t.end();
});

test('check the 2nd number of Fibonacci', (t: any) => {
  t.equal(getFibonacciNumber(2), 1);
  t.end();
});

test('check the 3rd number of Fibonacci', (t: any) => {
  t.equal(getFibonacciNumber(3), 2);
  t.end();
});
