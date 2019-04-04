'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

function spaceRepeater (base: string, element: string, repeat: number) {
  for (let i: number = 1; i <= repeat; i++) {
    base += element;
  }
  console.log(base);
}

spaceRepeater('','.',3);
