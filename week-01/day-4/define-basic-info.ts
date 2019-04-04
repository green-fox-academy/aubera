'use strict';

// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean

let myName: string = 'Andor Auber';
let myAge: number = 30;
let myHeightInM: number = 1.93;
let amIMarried: boolean = true;
let marriedAnswer: string;

if (amIMarried){
  marriedAnswer = 'yes, I\'m married!';
} else {
  marriedAnswer = 'no, I\'m not married!';
}

console.log('Hi! My name is ' + myName + '. I\'m ' + myAge + ' years old. I\'m ' + myHeightInM + ' m tall and ' + marriedAnswer)
