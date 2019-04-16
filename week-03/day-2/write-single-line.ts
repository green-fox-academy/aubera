'use strict';
const fs = require('fs');
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

var fileName: string = 'my-file.txt';

function fileWriter (file:string):void{
  try {
    fs.appendFileSync(file, '\nAndor');
  } catch(e){
    console.log('Unable to write file: ' + e.path);
  }
}

fileWriter(fileName);
