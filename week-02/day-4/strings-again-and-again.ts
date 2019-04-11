'use strict';

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a *

function addStarCharAt(str: string, index: number): string {
  return str.substr(0, index) + '*' + str.substr(index);
}

let idx: number = 1;
function starSetter(str: string): any {
  if (str.lastIndexOf('*') === str.length - 2) {
    return str;
  } else {
    str = addStarCharAt(str, idx);
    idx += 2;
    return starSetter(str);
  }
}

console.log(starSetter('exXon'));
