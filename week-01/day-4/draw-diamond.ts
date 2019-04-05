'use strict';

let lineCount: number = 4;
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

for (let i: number = Math.round(lineCount/2); i >= 1; i--) {
  actualLine = repeater(spaceBase, spaceElement, i - 1);
  actualLine += repeater(spaceBase, starElement, starCount);
  starCount += 2;
  console.log(actualLine);
}
if (lineCount % 2){
  starCount -= 4;
  for (let j: number = 0; j < Math.floor(lineCount / 2); j++){
    actualLine = repeater(spaceBase, spaceElement, j + 1);
    actualLine += repeater(spaceBase, starElement, starCount);
    starCount -= 2;
    console.log(actualLine);
  }
} else {
  starCount -= 2;
  for (let k: number = 0; k < Math.floor(lineCount / 2); k++){
    actualLine = repeater(spaceBase, spaceElement, k);
    actualLine += repeater(spaceBase, starElement, starCount);
    starCount -= 2;
    console.log(actualLine);
  }
}
