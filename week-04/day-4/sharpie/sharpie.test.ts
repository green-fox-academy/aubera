'use strict';

const test = require('tape').test;
import { Sharpie } from './sharpie';

test('color property: blue', (t: any) => {
  let sharpie: Sharpie = new Sharpie('blue', 10);

  t.equal(sharpie.color, 'blue');
  t.end();
});

test('use method: 99', (t: any) => {
  let sharpie: Sharpie = new Sharpie('blue', 10);

  t.equal(sharpie.use(), 99);
  t.end();
});

test('use method: 104', (t: any) => {
  let sharpie: Sharpie = new Sharpie('blue', 10, 105);

  t.equal(sharpie.use(), 104);
  t.end();
});
