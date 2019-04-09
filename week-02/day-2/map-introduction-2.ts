'use strict';

let map: any = {};
map['978-1-60309-452-8'] = 'A Letter to Jo';
map['978-1-60309-459-7'] = 'Lupus';
map['978-1-60309-444-3'] = 'Red Panda and Moon Bear';
map['978-1-60309-461-0'] = 'The Lab';
for (let i: number = 0; i < Object.keys(map).length; i++){
  console.log(`${map[Object.keys(map)[i]]} (ISBN: ${Object.keys(map)[i]})`);
}
delete map['978-1-60309-444-3'];
Object.keys(map).forEach(element => map[element] === 'The Lab' ? delete map[element] : '');
map['978-1-60309-450-4'] = 'They Called Us Enemy';
map['978-1-60309-453-5'] = 'Why Did We Trust Him?';
console.log(Object.keys(map).filter(element => element === '478-0-61159-424-8').length === 0 ? 'There is no element with this ISBN number' : 'There is a match');
console.log(map['978-1-60309-453-5']);
