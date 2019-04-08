'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

function subint (num: number, arr: number[]){
  let element: string;
  let resArray: number[] = [];
  for (let i:number = 0; i < arr.length; i++){
    element = arr[i].toString();
    for (let j: number = 0; j < element.length; j++){
      if (element.charAt(j) === num.toString()){
        resArray.push(i);
        break;
      }
    }
  }
  return resArray;
}


// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'
