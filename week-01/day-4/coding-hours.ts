'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyCodingHours: number = 6;
let workingDays: number = 5;
let semesterCodingWeeks: number = 17;

let totalCodingTimeInSemester: number = dailyCodingHours*workingDays*semesterCodingWeeks;
console.log('Total coding time for an average Green Fox attendee in a 17 weeks long semester is: ' + totalCodingTimeInSemester + ' hours.');

let avgWorkingHoursWeekly: number = 52;
let totalWorkingHoursInSemester: number = semesterCodingWeeks*avgWorkingHoursWeekly;
let codingTimePercentage: number = totalCodingTimeInSemester/totalWorkingHoursInSemester*100;
console.log('Percentage of coding hours in a semester week is: ' + Math.round(codingTimePercentage*10)/10 + '%');
