'use strict';
const fs = require('fs');
// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

function ticTacResult(path: string){
  let content: string = fs.readFileSync(path, 'utf-8');
  let contentByRow: string[] = content.split('\n');
  let contentBySpace: string[][] = [];
  for (let j: number = 0; j < contentByRow.length; j++){
    contentBySpace.push(contentByRow[j].split(''));
  }
  for (let i: number = 0; i < contentByRow.length; i++){
    if (contentBySpace[i][0] === contentBySpace[i][1] && contentBySpace[i][0] === contentBySpace[i][2]){
      return contentBySpace[i][0];
    } else if (contentBySpace[0][i] === contentBySpace[1][i] && contentBySpace[0][i] === contentBySpace[2][i]){
      return contentBySpace[0][i];
    } else if (contentBySpace[0][0] === contentBySpace[1][1] && contentBySpace[0][0] === contentBySpace[2][2]){
      return contentBySpace[0][0];
    } else if (contentBySpace[2][0] === contentBySpace[1][1] && contentBySpace[2][0] === contentBySpace[0][2]){
      return contentBySpace[2][0];
    } else return 'Draw';
  }
}

console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"
