'use strict';

const test = require('tape').test;
import { CowsAndBulls } from './cab';

test('Test constructor length', (t:any) => {
  let num: CowsAndBulls = new CowsAndBulls();

  let actual: number = num.numberToGuess.length;
  let expected: number = 4;

  t.equal(actual, expected);
  t.end();
});

test('Test constructor type', (t:any) => {
  let num: CowsAndBulls = new CowsAndBulls();

  let actual: any = typeof num;
  let expected: string = 'object';

  t.equal(actual, expected);
  t.end();
});

test('Test getUserInput() with 4 digits (6789)', (t:any) => {
  let num: CowsAndBulls = new CowsAndBulls();

  let actual: any = num.getUserInput();
  let expected: string = '6789';

  t.equal(actual, expected);
  t.end();
});
