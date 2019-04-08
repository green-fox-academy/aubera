'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number[] = [3, 4, 5, 6, 7];
console.log(numList);

let reverseNumList: number[] = [];
let numListLength: number = numList.length - 1;

for (let i: number = 0; i < numList.length; i++) {
  reverseNumList[i] = numList[numListLength];
  numListLength--;
}
console.log(reverseNumList);

console.log(numList.reverse());
