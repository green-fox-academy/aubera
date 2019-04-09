'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(list: any[]): string[] {
  let alt: string[] = ['Croissant', 'Ice cream'];
  let j: number = 0;
  for (let i: number = 0; i < list.length; i++){
    if (typeof(list[i]) !== 'string'){
      list.splice(i, 1, alt[j]);
      j++;
    }
  }
  return list;
}

console.log(sweets(shopItems));


// export = sweets;
