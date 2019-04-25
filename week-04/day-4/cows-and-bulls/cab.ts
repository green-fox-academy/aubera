

'use strict';

const readLineSync = require('readline-sync');

export class CowsAndBulls {
  numberToGuess: number[] = [];
  gameState: string = 'playing';
  guessCounter: number = 0;
  isUserInputValid: boolean = false;

  constructor() {
    this.numberToGuess = this.generateNumberToGuess();
  }

  generateNumberToGuess(): number[] {
    if (this.numberToGuess.length === 4) {
      return this.numberToGuess;
    } else {
      let n: number = Math.round(Math.random() * 9);
      if (this.numberToGuess.indexOf(n) === -1) {
        this.numberToGuess.push(n);
      }
      return this.generateNumberToGuess();
    }
  }
}
