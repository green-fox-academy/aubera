'use strict';

import { Animal } from './animal'

export class Mammal extends Animal{
  name: string;
  age: number;
  isAlive: boolean;
  lifeExpectancy: number;

  constructor(name: string, age: number = 0, isAlive: boolean = true, lifeExpectancy: number = 50){
    super();
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
    this.lifeExpectancy = lifeExpectancy;
  }

  breed(): string{
    return 'pushing miniature versions out.';
  }
}
