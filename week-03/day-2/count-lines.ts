'use strict';
const fs = require('fs');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

var fileName: string = 'my-file.txt';

function lineCounter (file:string):string{
  let fileContent:string = '';
  try {
    fileContent = fs.readFileSync(file, 'utf-8');
  } catch(e){}
  let numberOfLines: number = 0;
  for (let i: number = 0; i < fileContent.length; i++){
    if (fileContent[i] === '\n'){
      numberOfLines++;
    }
  }
  return `The file ${file} contains ${numberOfLines} row(s).`
}

console.log(lineCounter(fileName));
