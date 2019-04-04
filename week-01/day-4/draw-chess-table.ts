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

for (let i: number = 1; i <= lineCount; i++) {
  if (i % 2) {
    console.log('% % % %')
  } else {
    console.log(' % % % %')
  }
}
