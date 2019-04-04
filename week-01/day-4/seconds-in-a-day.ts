'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let remainingHours: number = 24 - currentHours;
let remainingMinutes: number = 60 - currentMinutes;
let remainingSeconds: number = 60 - currentSeconds;

let totalRemainingSecondsInADay: number = (remainingHours * 3600) + (remainingMinutes * 60) + remainingSeconds

console.log(totalRemainingSecondsInADay);
