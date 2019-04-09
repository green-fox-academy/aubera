'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let checkList: number[] = [4, 8, 12, 16];


function checkNums(db: number[], list: number[]) {
  let count: number = 0;
  let ans: boolean;
  for (let i: number = 0; i < list.length; i++) {
    count = db.indexOf(list[i]) !== -1 ? count += 1 : count += 0;
  }
  count === list.length ? ans = true : ans = false ;
  return ans;
}


console.log(checkNums(listOfNumbers, checkList));

export = checkNums;
