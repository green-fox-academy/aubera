'use strict';

const test = require('tape').test;
import { isAnagram } from './anagram';

test('check isAnagram() function', (t: any) => {
  let actual = isAnagram('night', 'thing');

  t.true(actual)
  t.end();
});

test('check isAnagram() function', (t: any) => {
  let actual = isAnagram('night', 'ting');

  t.false(actual)
  t.end();
});

test('check isAnagram() function', (t: any) => {
  let actual = isAnagram('night', 'tling');

  t.false(actual)
  t.end();
});
