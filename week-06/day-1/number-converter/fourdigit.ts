'use strict';

import { Dictionary } from './dictionary';

export class FourDigit extends Dictionary {
    constructor (inputNumber: number) {
    super(inputNumber);
  }

  numConverter(): string {
    let numArray: string[] = this.numberToArray(this.inputNumber);
    return this.convertLastFourDigits(numArray);
  }
}
