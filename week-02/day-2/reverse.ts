'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(str: string): string {
  let position: number = 0;
  let strReversed: string = '';
  for (let i: number = reversed.length - 1; i >= 0; i--) {
    strReversed = strReversed.concat(reversed.charAt(i));
  }
  return strReversed;
}

console.log(reverse(reversed));

export = reverse;
