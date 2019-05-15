//jshint esversion: 6

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
// If the first p has an 'apple' class, replace cat's content with 'dog'
// Make apple red by adding a .red class
// Make balloon less balloon-like (change its shape)

var paragraphs = document.querySelectorAll('p');
var appleP = document.querySelector('.apple');
var catP = document.querySelector('.cat');
var balloonP = document.querySelector('.balloon');

paragraphs[3].classList.contains('dolphin') ? appleP.innerHTML = 'pear' : '';

paragraphs[0].classList.contains('apple') ? catP.innerHTML = 'dog' : '';

appleP.classList.add('red');

balloonP.style.borderRadius = '20%';
