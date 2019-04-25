

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

  getUserInput(): number {
    let userInput: number = 0;
    while (!this.isUserInputValid) {
      try {
        userInput = readLineSync.question('Please give me a four digit number:  ');
        if (userInput.toString().length < 4) {
          throw new Error("Too few digits!");
        } else if (userInput.toString().length > 4) {
          throw new Error("Too many digits!");
        } else {
          this.isUserInputValid = true;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    return userInput;
  }
}

let num: CowsAndBulls = new CowsAndBulls();
// num.getUserInput();
console.log(num.getUserInput());
