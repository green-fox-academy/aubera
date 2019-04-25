'use strict';

export function isAnagram (a: string, b: string): boolean{
  let ans: boolean = false;
  if (a.length === b. length){
    let bArray: string[] = b.split('');
    let aArray: string[] = [];
    for (let i: number = 0; i < a.length; i++){
      aArray.push(bArray[bArray.indexOf(a[i])]);
    }
    b = aArray.join('');
    a === b ? ans = true : ans;
  }
  return ans;
}
