'use strict';
const fs = require('fs');

// Create a method that decrypts encoded-lines.txt

const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '[', ',', '-', '.', '/', '*', '+', "'", '('];
const content: string = fs.readFileSync('encoded-lines.txt', 'utf-8');

function decoder(path: string): any {
  let decoded: string = '';
  let separateByRow: string[] = path.split('\n');
  let separateByChar: string[][] = [];
  for (let i: number = 0; i < separateByRow.length; i++) {
    separateByChar.push(separateByRow[i].split(''));
    for (let j: number = 0; j < separateByChar[i].length; j++) {
      if (separateByChar[i][j].toLowerCase() !== separateByChar[i][j]) {
        decoded += letters[letters.indexOf(separateByChar[i][j].toLowerCase()) - 1].toUpperCase();
      } else if (separateByChar[i][j] === ' ') {
        decoded += ' ';
      } else {
        decoded += letters[letters.indexOf(separateByChar[i][j]) - 1];
      }
    }
    decoded += '\n'
  }
  return decoded
}

console.log(decoder(content));
