'use strict';

import { Comparable } from './comparable'
import { Printable } from '../printable/printable'

export class Domino implements Comparable, Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(other: Comparable) {
    if (this.values[0] < other.values![0]) {
      return -1;
    }
    if (this.values[0] > other.values![0]) {
      return 1;
    }
    return 0;
  }

  printAllFields(): void{
    console.log(this.values);
  }
}
