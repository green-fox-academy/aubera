'use strict';

import { Car } from './car'

export class Station{
  gasAmount: number = 1000;

  refill(car: Car): void{
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
    console.log('Ok.')
  }
}

let newStation: Station = new Station();
let newCar: Car = new Car();

console.log(newCar);
newStation.refill(newCar);
console.log(newCar);
console.log(newStation);
