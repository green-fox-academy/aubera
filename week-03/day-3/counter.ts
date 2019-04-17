'use strict';

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter{
  integer: number;

  constructor(int: number = 0){
    this.integer = int;
  }

  add(number: number = 0){
    if (number === 0){
      this.integer++;
    } else {
      this.integer += number;
    }
  }

  get(){
    return this.integer.toString();
  }

  reset(){
    this.integer = 0;
  }
}

let zero = new Counter();
console.log(zero);
zero.add();
zero.add(4);
console.log(zero.get());
