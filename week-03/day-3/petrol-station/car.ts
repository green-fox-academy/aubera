'use strict';
import { Station } from './station'

export class Car{
  gasAmount: number;
  capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100){
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}
