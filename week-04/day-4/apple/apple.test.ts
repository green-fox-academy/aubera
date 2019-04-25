'use strict';

const test = require('tape').test;
import { Apple } from './apple'

test('check class method', (t: any) => {
  const apple: Apple = new Apple();

  var actual: string = apple.getApple();
  var expected: string = 'apple';

  t.equal(actual, expected);
  t.end();
});
