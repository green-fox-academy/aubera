
'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values

let bmi: number = massInKg/(heightInM**2);

console.log('Your BMI is: ' + Math.round(bmi*10)/10);
