'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 8;
let oddCounter: string = '';
let evenCounter: string = '';

for (let i: number = 1; i <= lineCount / 2; i++) {
  evenCounter = '';
  oddCounter = '';
  if (i % 2) {
    // first line
    for (let j: number = 1; j <= lineCount; j++) {
      if (j % 2) {
        oddCounter += '%';
      } else {
        oddCounter += ' ';
      }
    }
    for (let k: number = 1; k <= lineCount; k++) {
      if (k % 2) {
        evenCounter += ' ';
      } else {
        evenCounter += '%';
      }
    }
  } else {
    for (let k: number = 1; k <= lineCount; k++) {
      if (k % 2) {
        evenCounter += ' ';
      } else {
        evenCounter += '%';
      }
    }
    for (let j: number = 1; j <= lineCount; j++) {
      if (j % 2) {
        oddCounter += '%';
      } else {
        oddCounter += ' ';
      }
    }
  }
  console.log(oddCounter + '\n' + evenCounter);
}
