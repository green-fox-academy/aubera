'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(list: number[], numToCheck: number = 7) {
  return list.indexOf(numToCheck) !== -1 ? 'Hoorray' : 'Noooooo';
}

console.log(containsSeven(numbers, 7));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
function containsSeven2 (list: number[], numToCheck: number = 7) {
  let ans: string = '';
  list.forEach(function (element){
    return element === numToCheck ? ans = 'Hoorray' : ans = 'Noooooo';
  });
  return ans;
}

console.log(containsSeven2(numbers, 7));

export = containsSeven;
