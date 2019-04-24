'use strict';

import { Egglayers } from './animal'
import { Flyable } from '../flyable/flyable'

export class Bird extends Egglayers implements Flyable{
  name: string;
  age: number;
  isAlive: boolean;
  lifeExpectancy: number;

  constructor(name: string, age: number = 0, isAlive: boolean = true, lifeExpectancy: number = 10){
    super();
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
    this.lifeExpectancy = lifeExpectancy;
  }

  land(): void{
    console.log('Landing!')
  }

  fly(): void{
    console.log('Flying!')
  }
  takeOff(): void{
    console.log('Taking off!')
  }
}
