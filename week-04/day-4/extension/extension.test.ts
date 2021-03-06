'use strict';

const test = require('tape').test;
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 3 is 5', function(t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function(t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('add: 5 and 4 is 9', function(t: any): any {
  t.equal(add(5, 4), 9);
  t.end();
});

test('add: 0 and 4 is 4', function(t: any): any {
  t.equal(add(0, 4), 4);
  t.end();
});

test('add: -3 and 4 is 1', function(t: any): any {
  t.equal(add(-3, 4), 1);
  t.end();
});

test('max of three: first', function(t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: third', function(t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('max of three: second', function(t: any): any {
  t.equal(maxOfThree(3, 9, 5), 9);
  t.end();
});

test('median: four', function(t: any): any {
  t.deepEqual(median([7, 5, 3, 5]), [5, 5]);
  t.end();
});

test('median: five', function(t: any): any {
  t.deepEqual(median([1, 2, 3, 4, 5]), [3]);
  t.end();
});

test('median: with two digit numbers', function(t: any): any {
  t.deepEqual(median([3, 5, 5, 7, 9, 10, 11, 12, 13, 14]), [9, 10]);
  t.end();
});

test('is vowel: a', function(t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function(t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test('is vowel: k', function(t: any): any {
  t.notOk(isVowel('k'));
  t.end();
});

test('translate: bemutatkozik', function(t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', function(t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});
