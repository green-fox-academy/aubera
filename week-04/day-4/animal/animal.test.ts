'use strict';

const test = require('tape').test;
import { Animal } from './animal';

test('Animal.eat()', (t:any) => {
  let animal: Animal = new Animal('Maki');
  animal.eat()
  let actual: number = animal.hunger;
  let expected: number = 49;

  t.equal(actual, expected);
  t.end();
});

test('Animal.drink()', (t:any) => {
  let animal: Animal = new Animal('Maki');
  animal.drink()
  let actual: number = animal.thirst;
  let expected: number = 49;

  t.equal(actual, expected);
  t.end();
});

test('Animal.play() this.hunger', (t:any) => {
  let animal: Animal = new Animal('Maki');
  animal.play()
  let actual: number = animal.hunger;
  let expected: number = 51;

  t.equal(actual, expected);
  t.end();
});

test('Animal.play() this.thirst', (t:any) => {
  let animal: Animal = new Animal('Maki');
  animal.play()
  let actual: number = animal.thirst;
  let expected: number = 51;

  t.equal(actual, expected);
  t.end();
});
