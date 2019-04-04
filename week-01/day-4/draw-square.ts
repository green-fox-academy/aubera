'use strict';

let lineCount: number = 6;
let lineBase: string = '';
let lineElement: string = '%';
let emptyElement: string = ' ';

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

function repeater(base: string, element: string, repeat: number) {
  for (let i: number = 1; i <= repeat; i++) {
    base += element;
  }
  return (base);
}

for (let i: number = 0; i < lineCount; i++){
  if (i === 0 || i === lineCount - 1){
    console.log(repeater(lineBase, lineElement, lineCount));
  } else {
    console.log('%' + repeater(lineBase, emptyElement, lineCount - 2) + '%');
  }
}
