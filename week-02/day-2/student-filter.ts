'use strict';

const students: any[] = [
{ name: 'Mark', age: 9.5, candies: 2 },
{ name: 'Paul', age: 12, candies: 5 },
{ name: 'Clark', age: 7, candies: 3 },
{ name: 'Pierce', age: 12, candies: 7 },
{ name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs:
//  - how many candies they have on average

function candyCounter (list: any[]){
  let count: string[] = [];
  for (let i: number = 0; i < list.length; i++){
    list[i].candies < 4 ? count.push(list[i].name) : '';
  }
  return count;
}

function candyCounterAvg (list: any[]){
  let count: number = 0;
  for (let i: number = 0; i < list.length; i++){
    count += list[i].candies;
  }
  return count/list.length;
}

console.log(`These student have less than 4 candies: ${candyCounter(students)}.`)
console.log(`The average candy count was: ${candyCounterAvg(students)}.`)
