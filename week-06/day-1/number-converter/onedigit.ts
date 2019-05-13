'use strict';

import { Dictionary } from './dictionary';

class OneDigit extends Dictionary {
    constructor (inputNumber: number) {
    super(inputNumber);
  }

  numConverter(): string {
    let numArray: string[] = this.numberToArray(this.inputNumber);
    return this.convertLastDigit(numArray);
  }
}

export { OneDigit };
