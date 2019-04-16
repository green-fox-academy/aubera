'use strict';
const fs = require('fs');
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const logContent = fs.readFileSync('log.txt', 'utf-8');

function uniqueIPAdresses(log: string): any {
  let uniques: string[] = [];
  let separateByRow: string[] = log.split('\n');
  let separateBySpace: string[][] = [];
  for (let i: number = 0; i < separateByRow.length; i++) {
    separateBySpace.push(separateByRow[i].split(' '));
    if (uniques.indexOf(separateBySpace[i][8]) === -1) {
      uniques.push(separateBySpace[i][8]);
    }
  }
  return uniques.length;
}

function postGetRatio(log: string): any {
  let posts: number = 0;
  let gets: number = 0;
  let separateByRow: string[] = log.split('\n');
  let separateBySpace: string[][] = [];
  for (let i: number = 0; i < separateByRow.length; i++) {
    separateBySpace.push(separateByRow[i].split(' '));
    if (separateBySpace[i][11] === 'GET') {
      gets++;
    } else if (separateBySpace[i][11] === 'POST') {
      posts++;
    }
  }
  return gets / posts;
}

console.log('Unique IP addresses in the log file: ' + uniqueIPAdresses(logContent));
console.log('Ratio of GET/POST requests in the log file: ' + postGetRatio(logContent));
