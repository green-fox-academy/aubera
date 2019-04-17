'use strict';

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie{
  color: string;
  width: number;
  inkAmount: number;

  constructor(col: string, w: number, ink: number = 100){
    this.color = col;
    this.width = w;
    this.inkAmount = ink;
  }

  use(){
    this.inkAmount--;
  }
}

let pinkie = new Sharpie('pink', 10);
console.log(pinkie);
pinkie.use();
pinkie.use();
pinkie.use();
console.log(pinkie);
