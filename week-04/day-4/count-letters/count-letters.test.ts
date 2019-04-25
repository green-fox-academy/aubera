'use strict';
const test = require('tape').test;
import { countLetter } from './count-letters';

test('test countLetter() function for a valid string', (t: any) => {
  let actual: {} = countLetter('aabbcdeee');
  let expected: {} = { a: 2, b: 2, c: 1, d: 1, e: 3 };

  t.deepEqual(actual, expected);
  t.end();
});

test('test countLetter() function for empty string', (t: any) => {
  let actual: {} = countLetter('');
  let expected: {} = {};

  t.deepEqual(actual, expected);
  t.end();
});
