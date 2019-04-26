'use strict';

const readLineSync = require('readline-sync');

export class CowsAndBulls {
  public numberToGuess: number[] = [];
  public gameState: string = 'playing';
  public guessCounter: number = 0;

  constructor() {
    this.numberToGuess = this.generateNumberToGuess();
  }

  generateNumberToGuess(): number[] {
    if (this.numberToGuess.length === 4) {
      // console.log(this.numberToGuess);
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
    let isUserInputValid: boolean = false;
    while (!isUserInputValid) {
      try {
        userInput = readLineSync.question('Please give me a four digit number:  ');
        if (userInput.toString().length < 4) {
          throw new Error("Too few digits!");
        } else if (userInput.toString().length > 4) {
          throw new Error("Too many digits!");
        } else {
          isUserInputValid = true;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    return userInput;
  }

  guess(num: number): void {
    let guessArray: string[] = num.toString().split('');
    let cows: number = 0;
    let bulls: number = 0;
    for (let i: number = 0; i < 4; i++) {
      if (Number(guessArray[i]) === this.numberToGuess[i]) {
        cows++;
      } else if (this.numberToGuess.indexOf(Number(guessArray[i])) !== -1) {
        bulls++;
      }
    }
    console.log(`${cows} cow, ${bulls} bull`);
    this.guessCounter++;
    if (cows === 4) {
      this.gameState = 'finished';
      console.log(`You guessed it in ${this.guessCounter} trials.`)
    } else {
      this.gameState = 'playing';
    }
  }

  game(): void {
    while (this.gameState !== 'finished') {
      let guessNumber = this.getUserInput();
      this.guess(guessNumber);
    }
  }
}
