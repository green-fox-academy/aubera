'use strict';

import { Person } from './person'

export class Student extends Person{
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(previousOrganization: string = 'The School of Life'){
    super();
    this.previousOrganization = previousOrganization;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  getGoal(): void{
    console.log('My goal is: Be a junior software developer.');
  }

  skipDays(numberOfDays: number): void{
    this.skippedDays += numberOfDays;
  }
}
