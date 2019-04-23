'use strict';

import { Person } from './person'

export class Sponsor extends Person{
  company: string;
  hiredStudents: number = 0;

  constructor(company: string = 'Google'){
    super();
    this.company = company;
  }

  introduce(): void{
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal(): void{
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  hire(): void{
    this.hiredStudents++;
  }
}