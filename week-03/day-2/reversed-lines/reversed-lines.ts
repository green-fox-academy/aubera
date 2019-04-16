'use strict';
const fs = require('fs');

// Create a method that decrypts reversed-lines.txt

let content = fs.readFileSync('reversed-lines.txt', 'utf-8');

function lineReverser(path: string): any {
  let separateByRow: string[] = path.split('\n');
  let separateByChar: string[][] = [];
  let reverse: string = '';

  for (let i: number = 0; i < separateByRow.length; i++) {
    separateByChar.push(separateByRow[i].split(''));
  }
  for (let i: number = 0; i < separateByRow.length; i++) {
    for (let j: number = separateByChar[i].length - 1; j >= 0; j--) {
      reverse += separateByChar[i][j];
    }
    reverse += '\n';
  }
  return reverse;
}

console.log(lineReverser(content));
