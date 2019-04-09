'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(arr: string[], str1: string, str2: string) {
  let firstIndex: number = arr.indexOf(str1);
  let secondIndex: number = arr.indexOf(str2);
  let swap: number;
  if (firstIndex > secondIndex) {
    swap = firstIndex;
    firstIndex = secondIndex;
    secondIndex = swap;
  }
  let newArr: string[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (i === firstIndex) {
      newArr.push(arr[secondIndex]);
    } else if (i === secondIndex) {
      newArr.push(arr[firstIndex]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join(' ');
}

console.log(quoteSwap(words, 'do', 'cannot'));
// Expected output: "What I cannot create I do not understand."

export = quoteSwap;
