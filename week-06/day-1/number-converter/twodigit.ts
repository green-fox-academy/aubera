'use strict';

import { Dictionary } from './dictionary';

class TwoDigit extends Dictionary {
    constructor (inputNumber: number) {
    super(inputNumber);
  }

  numConverter(): string {
    let numArray: string[] = this.numberToArray(this.inputNumber);
    return this.convertLastTwoDigits(numArray);
  }
}

export { TwoDigit };
