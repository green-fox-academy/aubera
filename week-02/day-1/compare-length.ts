'use strict';

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList: number[] = [1, 2, 3];
let secondList: number[] = [4, 5];
let diff: number;

if (firstList.length > secondList.length) {
  diff = firstList.length - secondList.length;
  console.log('First list is greater by ' + diff + ' element(s).');
} else {
  diff = secondList.length - firstList.length;
  console.log('Second list is greater by ' + diff + ' element(s).');
}
