'use strict';

import { Egglayers } from './animal'

export class Reptile extends Egglayers{
  name: string;
  age: number;
  isAlive: boolean;
  lifeExpectancy: number;

  constructor(name: string, age: number = 0, isAlive: boolean = true, lifeExpectancy: number = 20){
    super();
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
    this.lifeExpectancy = lifeExpectancy;
  }
}
