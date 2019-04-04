'use strict';

let lineCount: number = 4;
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


for (lineCount; lineCount >= 1; lineCount--) {
  actualLine = repeater(spaceBase, spaceElement, lineCount-1);
  actualLine += repeater(spaceBase, starElement, starCount);
  actualLine += repeater(spaceBase, spaceElement, lineCount-1);
  starCount += 2;
  console.log(actualLine);
}
