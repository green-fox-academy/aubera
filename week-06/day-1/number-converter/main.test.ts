'use strict'

import {convertNumber} from './main';

const test = require('tape').test;

test('Test convertNumber() with 1 digits (3)', (t:any) => {
  t.equal(convertNumber(3), 'three');
  t.end();
});

test('Test convertNumber() with 2 digits (45)', (t:any) => {
  t.equal(convertNumber(45), 'forty-five');
  t.end();
});

test('Test convertNumber() with 2 digits (11)', (t:any) => {
  t.equal(convertNumber(11), 'eleven');
  t.end();
});

test('Test convertNumber() with 2 digits (10)', (t:any) => {
  t.equal(convertNumber(10), 'ten');
  t.end();
});

test('Test convertNumber() with 2 digits (60)', (t:any) => {
  t.equal(convertNumber(60), 'sixty');
  t.end();
});

test('Test convertNumber() with 3 digits (123)', (t:any) => {
  t.equal(convertNumber(123), 'one hundred and twenty-three');
  t.end();
});

test('Test convertNumber() with 3 digits (140)', (t:any) => {
  t.equal(convertNumber(140), 'one hundred and forty');
  t.end();
});

test('Test convertNumber() with 3 digits (112)', (t:any) => {
  t.equal(convertNumber(112), 'one hundred and twelve');
  t.end();
});

test('Test convertNumber() with 3 digits (400)', (t:any) => {
  t.equal(convertNumber(400), 'four hundred');
  t.end();
});

test('Test convertNumber() with 3 digits (602)', (t:any) => {
  t.equal(convertNumber(602), 'six hundred and two');
  t.end();
});

test('Test convertNumber() with 4 digits (4120)', (t:any) => {
  t.equal(convertNumber(4120), 'four thousand one hundred and twenty');
  t.end();
});

test('Test convertNumber() with 4 digits (4112)', (t:any) => {
  t.equal(convertNumber(4112), 'four thousand one hundred and twelve');
  t.end();
});

test('Test convertNumber() with 4 digits (7645)', (t:any) => {
  t.equal(convertNumber(7645), 'seven thousand six hundred and forty-five');
  t.end();
});

test('Test convertNumber() with 4 digits (8200)', (t:any) => {
  t.equal(convertNumber(8200), 'eight thousand two hundred');
  t.end();
});

test('Test convertNumber() with 4 digits (5000)', (t:any) => {
  t.equal(convertNumber(5000), 'five thousand');
  t.end();
});

test('Test convertNumber() with 4 digits (5001)', (t:any) => {
  t.equal(convertNumber(5001), 'five thousand and one');
  t.end();
});

test('Test convertNumber() with 4 digits (5011)', (t:any) => {
  t.equal(convertNumber(5011), 'five thousand and eleven');
  t.end();
});
