'use strict';

const test = require('tape').test;

import { getIndex } from './get-index';

test('testing get index function', (t:any) => {
 let actual: number = getIndex([1, 2, 3, 4], 2);
 let expected: number = 1;

 t.equal(actual, expected);
 t.end();
});

test('testing get index function', (t:any) => {
 let actual: number = getIndex([1, 2, 3, 4], 7);
 let expected: number = -1;

 t.equal(actual, expected);
 t.end();
});

test('testing get index function', (t:any) => {
 let actual: number = getIndex(['a', 'b', 'c'], 'c');
 let expected: number = 2;

 t.equal(actual, expected);
 t.end();
});

test('testing get index function', (t:any) => {
 let actual: number = getIndex(['d', 'e', 'f'], 'a');
 let expected: number = -1;

 t.equal(actual, expected);
 t.end();
});
