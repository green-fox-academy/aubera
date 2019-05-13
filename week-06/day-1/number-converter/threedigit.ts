'use strict';

import { Dictionary } from './dictionary';

class ThreeDigit extends Dictionary {
  constructor(inputNumber: number) {
    super(inputNumber);
  }

  numConverter(): string {
    let numArray: string[] = this.numberToArray(this.inputNumber);
    return this.convertLastThreeDigits(numArray);
  }
}

export { ThreeDigit };
