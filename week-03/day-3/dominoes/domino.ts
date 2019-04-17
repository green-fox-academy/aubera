'use strict';

class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    getLeftSide(): number{
      return this.values[0];
    }

    getRightSide(): number{
      return this.values[1];
    }

}

export {Domino};
