'use strict';

export class Sum {
  getSum(items: number[]): number {
    return items.reduce((a: number, b: number) => a + b);
  }
}
