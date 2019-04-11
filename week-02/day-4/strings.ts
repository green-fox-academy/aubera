'use strict';

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function setCharAt(str: string, index: number, chr: string): string {
  return str.substr(0, index) + chr + str.substr(index + 1);
}

function xyChanger(str: string): any {
  if (str.indexOf('x') === -1) {
    return str;
  } else {
    str = setCharAt(str, str.indexOf('x'), 'y');
    return xyChanger(str);
  }
}

console.log(xyChanger('exXon'));
