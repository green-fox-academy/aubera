'use strict';

declare function require(path: string): any;
let readLineSync = require('readline-sync');

import { OneDigit } from './onedigit';
import { TwoDigit } from './twodigit';
import { ThreeDigit} from './threedigit';
import { FourDigit } from './fourdigit';
import { Dictionary } from './dictionary';

// let input: number = readLineSync.question('Give me a number (please)!\n');
let stringToPrint: string;

export function convertNumber(userInput: number): string {
    if (userInput.toString().length === 1) {
    stringToPrint = new OneDigit(userInput).numConverter();
  } else if (userInput.toString().length === 2) {
    stringToPrint = new TwoDigit(userInput).numConverter();
  } else if (userInput.toString().length === 3) {
    stringToPrint = new ThreeDigit(userInput).numConverter();
  } else {
    stringToPrint = new FourDigit(userInput).numConverter();
  } return stringToPrint;
}

// console.log(convertNumber(input));
