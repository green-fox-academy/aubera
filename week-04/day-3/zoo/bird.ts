'use strict';

import { Egglayers } from './animal'

export class Bird extends Egglayers{
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
}
