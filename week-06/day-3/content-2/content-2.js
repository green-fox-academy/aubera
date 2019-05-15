//jshint esversion: 6

// 1) replace the list items ' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
// 2) change the <ul> element's background color to 'limegreen'
//   - use css class to change the color instead of the style property

const list = ['apple', 'banana', 'cat', 'dog'];
var paragraphs = document.querySelectorAll('li');
for (var i in paragraphs){
  paragraphs[i].innerHTML = list[i];
}

document.querySelector('ul').setAttribute('class', 'lime');
