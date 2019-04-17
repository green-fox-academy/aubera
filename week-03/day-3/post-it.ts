'use strict';

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bgcolor: string, txt: string, txtCol: string) {
    this.backgroundColor = bgcolor;
    this.text = txt;
    this.textColor = txtCol;
  }
}

let postIt1 = new PostIt('orange', 'Idea 1', 'blue');
let postIt2 = new PostIt('pink', 'Awesome', 'black');
let postIt3 = new PostIt('yellow', 'Superb!', 'green');

console.log(postIt1);
console.log(postIt2);
console.log(postIt3);
