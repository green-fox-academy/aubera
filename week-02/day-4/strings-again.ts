'use strict';

// Given a string, compute recursively a new string where
// all the 'x' chars have been removed.

function removeCharAt(str: string, index: number): string {
  return str.substr(0, index) + str.substr(index + 1);
}

function xRemover(str: string): any {
  if (str.indexOf('x') === -1) {
    return str;
  } else {
    str = removeCharAt(str, str.indexOf('x'));
    return xRemover(str);
  }
}

console.log(xRemover('exxxXon'));
