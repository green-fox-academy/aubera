'use strict';

export function countLetter(str: string): object{
  let strArray: string[] = str.split('');
  let ans: any = {};
  for (let i: number = 0; i < strArray.length; i++){
    if (ans[strArray[i]] === undefined) {
      ans[strArray[i]] = 1;
    } else {
      ans[strArray[i]]++;
    }
  }
  return ans;
}
