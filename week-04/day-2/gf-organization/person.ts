'use strict';

export class Person{
  name: srting;
  age: number;
  gender: string;

  constructor(name: string: 'Jane Dow', age: number = 30, gender: string = 'female'){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce(): void{
    console.log('Hi, I\'m name, a age year old gender.');
  }

  getGoal(): void{
    console.log('My goal is: Live for the moment!');
  }
}
