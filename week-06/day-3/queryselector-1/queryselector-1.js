//jshint esversion: 6

//   1. store the element that says 'The King' in the 'king' variable.
//   console.log it.
//   2. store 'The Businessman' and 'The Lamplighter'
//   in the 'businessLamp' variable.
//   console.log each of them.
//   3. store 'The King' and 'The Conceited Man'
//   in the 'conceitedKing' variable.
//   alert them one by one.
//   4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//   in the 'noBusiness' variable.
//   console.log each of them.

var king = document.getElementById('b325');
console.log(king);

var businessLamp = document.querySelectorAll('.big');
for (var i = 0; i < businessLamp.length; i++) {
  console.log(businessLamp[i]);
}

var conceitedKing = document.querySelectorAll('.b326, #b325');
for (var i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i]);
}

var noBusiness = document.querySelectorAll('#b325, .b326, .b329');
for (var i = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i]);
}
