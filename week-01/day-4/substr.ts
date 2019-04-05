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

function substr3(str: string, keyword: string): number {
  let lengthOfSearchKeyword: number = keyword.length;
  let position: number = -1;

  for (let i: number = 0; i < str.length; i++) {
    if (str[i] === keyword[0]) {
      for (let j:number = 0; j < lengthOfSearchKeyword; j++){
        if (str[i+j] === keyword[j] && j === lengthOfSearchKeyword - 1){
          position = i;
        }
      }
    }
  }
  return position;
}


//  Example

// should print: `17`
console.log(substr3("this is what I'm searching in", "searching"));

// should print: `-1`
console.log(substr3("this is nwhat I'm searchinog in", "not"));
