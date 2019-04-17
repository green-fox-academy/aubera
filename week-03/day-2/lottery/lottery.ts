'use strict';
const fs = require('fs');
// Create a method that find the 5 most common lottery numbers in lottery.csv

const data: string = fs.readFileSync('lottery.csv', 'utf-8');

function lotteryNumberFrequency(path: string): any {
  let separateByRow: string[] = path.split('\n');
  let numbers: string[] = [];
  let counts: any[] = [];
  for (let i: number = 0; i < separateByRow.length -1; i++) {
    var actualRow: string = separateByRow[i].slice(separateByRow[i].lastIndexOf('Ft;'));
    for (let j: number = 0; j < 5; j++) {
      numbers.push(actualRow.slice(actualRow.lastIndexOf(';') + 1));
      actualRow = actualRow.substring(0, actualRow.lastIndexOf(';')); // +1 makes it an infinite loop, and no second data will be passed.
    }
  }
  for (let k: number = 0; k < 90; k++) {
    counts[k] = new Array(2);
    counts[k][0] = (k + 1);
  }
  for (let l: number = 0; l < numbers.length; l++) {
    if (counts[parseInt(numbers[l]) - 1][1] === undefined){
      counts[parseInt(numbers[l]) - 1][1] = 1;
    } else {
      counts[parseInt(numbers[l])-1][1] += 1;
    }
  }
  function bubbleSort(arr: any[]): any[]{
    let limit: number = arr.length - 1;
    let swap: any [];
    for (let m: number = 0; m < arr.length; m++) {
      for (let n: number = 0; n < limit; n++) {
        if (arr[n][1] > arr[n + 1][1]) {
          swap = arr[n];
          arr[n] = arr[n + 1];
          arr[n + 1] = swap;
        }
      }
      limit--;
    }
    return counts.reverse().splice(0, 5);
  }
  let top5Numbers: any[] = bubbleSort(counts);
  console.log(top5Numbers);
}

console.log(lotteryNumberFrequency(data));
