'use strict';

export class Sum {
  getSum(items: number[]): number {
    try{
      let ans: number = items.reduce((a: number, b: number) => a + b);
      return ans
    } catch(error){
      return 0;
    }
  }
}
