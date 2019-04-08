'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function bubble(arr: number[]) {
  let limit: number = arr.length;
  let swap: number;
  for (let j: number = 0; j < arr.length; j++) {
    for (let i: number = 0; i < limit; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
    limit--;
  }
  return arr;
}

function advancedBubble(arr: number[], descending: boolean = false) {
  let limit: number = arr.length;
  let swap: number;
  for (let j: number = 0; j < arr.length; j++) {
    for (let i: number = 0; i < limit; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
    limit--;
  }
  if (descending === true){
    arr.reverse();
  }
  return arr;
}


//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
