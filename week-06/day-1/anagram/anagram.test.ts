'use strict'

const test = require('tape').test;
import { anagram } from './anagram';

test('check for true anagram', (t: any) => {
  let actual = anagram('night', 'thing');

  t.true(actual)
  t.end();
});

test('check for bad anagram', (t: any) => {
  let actual = anagram('night', 'ting');

  t.false(actual)
  t.end();
});

test('check for bad anagram', (t: any) => {
  let actual = anagram('night', 'tling');

  t.false(actual)
  t.end();
});
