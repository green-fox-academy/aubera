'use strict';

let list: any = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550,
}

function calulations (list: any) {
  let under201: string[] = [];
  let exactly150: any = {};
  for (let i: number = 0; i < Object.keys(list).length; i++){
    list[Object.keys(list)[i]] < 201 ? under201.push(Object.keys(list)[i]) : '';
    list[Object.keys(list)[i]] === 150 ? exactly150[Object.keys(list)[i]] = list[Object.keys(list)[i]] : '';
  }
  console.log(`${under201} item(s) was/were under 201.`);
  console.log('Items which was/were exactly 150:' , exactly150);
}

calulations(list);

console.log(list);
