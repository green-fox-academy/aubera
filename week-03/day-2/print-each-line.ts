'use strict';
const fs = require('fs');

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

var fileName: string = 'my-files.txt';
var fileContent: string = '';

function fileOpener (path: string): any {
  return fs.readFileSync(path, 'utf-8');
}

try {
  fileContent = fileOpener(fileName);
  console.log(fileContent);
} catch(error){
  console.log('Unable to read file: ' + error.path);
}
