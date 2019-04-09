'use strict';

let map: any = {};
console.log(Object.keys(map).length === 0 ? 'empty' : 'not empty');
map[97] = 'a';
map[98] = 'b';
map[99] = 'c';
map[65] = 'A';
map[66] = 'B';
map[67] = 'C';
console.log(Object.keys(map));
console.log(Object.values(map));
map[68] = 'D';
console.log(Object.keys(map).length);
delete map[97];
console.log(Object.hasOwnProperty('100'));
map = {};
