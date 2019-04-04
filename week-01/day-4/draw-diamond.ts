'use strict';

let lineCount: number = 7;
let spaceCount: number = Math.floor(lineCount / 2);
let spaceBase: string = '';
let spaceElement: string = ' ';
let starElement: string = '*';
let actualLine: string = '';
let starCount: number = 1;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

function repeater(base: string, element: string, repeat: number) {
  for (let i: number = 1; i <= repeat; i++) {
    base += element;
  }
  return (base);
}

for (lineCount; lineCount >= 1; lineCount--) {
  if (lineCount >= 4) {
    actualLine = repeater(spaceBase, spaceElement, lineCount - 4);
    actualLine += repeater(spaceBase, starElement, starCount);
    starCount += 2;
    console.log(actualLine);
  } else {
    actualLine = repeater(spaceBase, spaceElement, spaceCount - 2);
    actualLine += repeater(spaceBase, starElement, starCount - 4);
    starCount -= 2;
    spaceCount += 1;
    console.log(actualLine);
  }
}
