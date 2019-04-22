'use strict';

export class Sponsor{
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number = 0;

  constructor(name: string = 'JaneDoe', age: number = 30, gender: string = 'female', company: string = 'Google'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
  }

  introduce():void{
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal(): void{
    console.log('Hire brilliant junior software developers.');
  }

  hire(): void{
    this.hiredStudents++;
  }
}
