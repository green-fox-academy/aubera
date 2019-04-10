'use strict';

let readLineSync = require('readline-sync');

// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

// const args = process.argv.splice(2); // Just a helper for you to get started
// console.log('Input params are', args);

function calculator() {
  let userInput: string = readLineSync.question('What calculations do you want to perform?\n ');
  let userInputArray: string[] = userInput.split(' ');
  let res: number = 0;
  let str: string = 'abcdefghijklmnopqrstuvwxyz'
  if (str.includes(userInputArray[1]) || str.includes(userInputArray[1])) {
    return 'Sorry, one of the inputs was not a valid number.';
  } else if (userInputArray[0] !== '+' && userInputArray[0] !== '-' && userInputArray[0] !== '*' && userInputArray[0] !== '/' && userInputArray[0] !== '%') {
    return 'Sorry, the operator was not valid. Try one of these: +, -, *, /, %';
  } else {
    if (userInputArray[0] === '+') {
      res = Number(userInputArray[1]) + Number(userInputArray[2]);
    } else if (userInputArray[0] === '-') {
      res = Number(userInputArray[1]) - Number(userInputArray[2]);
    } else if (userInputArray[0] === '*') {
      res = Number(userInputArray[1]) * Number(userInputArray[2]);
    } else if (userInputArray[0] === '/') {
      res = Number(userInputArray[1]) / Number(userInputArray[2]);
    } else if (userInputArray[0] === '%') {
      res = Number(userInputArray[1]) % Number(userInputArray[2]);
    }
  }
  return `\nThe result is: ${res}\n\nGood bye and have a nice day! :)`;
}

console.log(calculator());

// console.log(typeof Number('g'));
// export = calculator;
