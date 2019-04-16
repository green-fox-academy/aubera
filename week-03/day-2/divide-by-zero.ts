'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

const num: number = 0;

function zeroDivider (num: number): any {
  try{
    let ans: number = 10/num;
    if (num === 0){
      throw new Error("Fail to divide by 0!");
    }
    return `10 divided by ${num} is ${ans}.`
  } catch(error){
    console.log('Logic Error: ' + error.message);
  }
}

console.log(zeroDivider(num));
