'use strict';

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];
console.log(abc);

let abcFirstToThird: string[] = [abc[2], abc[1], abc[0]];
console.log(abcFirstToThird);

function changeArrayOrder (input: any[], firstElement: number = 1, secondElement: number = 3){
  let swap: number;
  swap = input[firstElement-1];
  input[firstElement-1] = input[secondElement-1];
  input[secondElement-1] = swap;
  console.log(input);
}
changeArrayOrder(abc);

console.log(abc.reverse());
