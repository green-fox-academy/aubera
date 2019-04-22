'use strict';

export class Mentor{
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name: string = 'JaneDoe', age: number = 30, gender: string = 'female', level: string = 'intermediate'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  introduce():void{
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  getGoal(): void{
    console.log('Educate brilliant junior software developers.');
  }
}
