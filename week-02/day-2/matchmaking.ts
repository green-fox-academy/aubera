'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(f: string[], m: string[]): string[] {
  let mixed: string[] = [];
  if (m.length > f.length) {
    for (let i: number = 0; i < m.length;  i++) {
      if (f[i] !== undefined) {
        mixed.push(f[i]);
      }
      if (m[i] !== undefined) {
        mixed.push(m[i]);
      }
    }
  }
  return mixed;
}

console.log(makingMatches(girls, boys));

export = makingMatches;
