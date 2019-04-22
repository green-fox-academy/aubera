'use strict';

export class Student{
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(name: string = 'JaneDoe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
  }

  introduce():void{
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  getGoal(): void{
    console.log('Be a junior software developer.');
  }

  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}
