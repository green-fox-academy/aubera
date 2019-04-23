'use strict';

import { Person } from './person'

export class Mentor extends Person{
  level: string;

  constructor(level: string = 'intermediate'){
    super();
    this.level = level;
  }

  getGoal(): void{
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce(): void{
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}
