'use strict';
const fs = require('fs');

// Create a method that decrypts reversed-order.txt

let content = fs.readFileSync('reversed-order.txt', 'utf-8');

function orderReverser(path: string): any {
  let separateByRow: string[] = path.split('\n');
  let reverse: string = '';

  for (let i: number = separateByRow.length - 1; i >= 0; i--) {
    reverse += separateByRow[i] + '\n';
  }
  return reverse;
}

console.log(orderReverser(content));
