'use strict';

import { Comparable } from './comparable'
import { Printable } from '../printable/printable'

class Domino implements Comparable, Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(other: Comparable) {
    if (this.values[0] < other.values[0]) {
      return -1;
    }
    if (this.values[0] > other.values[0]) {
      return 1;
    }
    return 0;
  }

  printAllFields(): void{
    console.log(this.values);
  }
}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

console.log(dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
}));

for (let domino of dominoes) {
  domino.printAllFields();
}
