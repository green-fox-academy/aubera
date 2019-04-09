'use strict';

let list: string[] = [];
console.log(list.length);
list.push('William');
console.log(list.length > 0 ? 'not empty' : 'empty');
list.push('John', 'Amanda');
console.log(list.length);
console.log(list[2]);
list.forEach(element => console.log(element));
for (let i: number = 0; i < list.length; i++) {
  console.log(`${i + 1}. ${list[i]}`);
}
list.splice(1, 1);
list.reverse().forEach(element => console.log(element));
list = [];
