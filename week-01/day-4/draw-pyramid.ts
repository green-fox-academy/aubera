'use strict';

let lineCount: number = 4;
let otherLineCount: number = lineCount;
let spaceBase: string = '';
let spaceElement: string = ' ';
let starElement: string = '*';
let actualLine: string = '';
let starCount: number = 1;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

function repeater (base: string, element: string, repeat: number) {
  for (let i: number = 1; i <= repeat; i++) {
    base += element;
  }
  return(base);
}

// let something: string = '';
// something = repeater('','.',3);
// console.log(valami);


for (let i: number = 1; i <= lineCount; i++) {
  actualLine = repeater(spaceBase, spaceElement, otherLineCount-1);
  actualLine += repeater(spaceBase, starElement, starCount);
  actualLine += repeater(spaceBase, spaceElement, otherLineCount-1);
  otherLineCount--;
  starCount += 2;
  console.log(actualLine);
}
