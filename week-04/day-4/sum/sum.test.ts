'use strict';

const test = require('tape').test;
import { Sum } from './sum'

test('check getSum() method', (t: any) => {
  let sum: Sum = new Sum();
  let arr: number[] = [1, 2, 3, 4, 5];

  let actual: number = sum.getSum(arr);
  let expected: number = 15;

  t.equal(actual, expected);
  t.end();
});

test('check getSum() method', (t: any) => {
  let sum: Sum = new Sum();
  let arr: number[] = [1];

  let actual: number = sum.getSum(arr);
  let expected: number = 1;

  t.equal(actual, expected);
  t.end();
});

test('check getSum() method', (t: any) => {
    let sum: Sum = new Sum();
    let arr: number[] = [];

    let actual: number = sum.getSum(arr);
    let expected: number = 0

    t.equal(actual, expected);
    t.end();
  });
