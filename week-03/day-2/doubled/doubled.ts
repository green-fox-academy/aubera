'use strict';
const fs = require('fs');

// Create a method that decrypts duplicated-chars.txt
const content: string = fs.readFileSync('duplicated-chars.txt', 'utf-8');

function doubleDecrypter(path: string): any {
  let splittedContent: string[] = path.split('');
  let decoded: string = '';
  for (let i: number = 0; i < splittedContent.length; i += 2) {
    splittedContent[i] === '.' ? decoded += splittedContent[i] + ' ' : decoded += splittedContent[i];
  }
  return decoded;
}

console.log(doubleDecrypter(content));
