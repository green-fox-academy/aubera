'use strict';
const fs = require('fs');
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let sourceFileName: string = 'my-file.txt';
let targetFileName: string = 'new-file.txt';

function copyFile (sourceFile: string, targetFile:string): any{
  fs.writeFileSync(targetFile, fs.readFileSync(sourceFile, 'utf-8'));
}

try{
  copyFile(sourceFileName, targetFileName);
  console.log(true);
}catch(e){
  console.log(false);
}
