'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string): number {
  let position: number = str.search(keyword);
  return position;
}

function substr2(str: string, keyword: string): number {
  let lengthOfSearchString: number = str.length;
  let lengthOfSearchKeyword: number = keyword.length;
  let position: number = -1;

  for (let i: number = 0; i < (lengthOfSearchString - lengthOfSearchKeyword); i++) {
    if (str.slice(i, i + lengthOfSearchKeyword) === keyword) {
      position = i;
    }
  }
  return position;
}


//  Example

// should print: `17`
console.log(substr2("this is what I'm searching in", "searching"));

// should print: `-1`
console.log(substr2("this is nwhat I'm searching in", "not"));
