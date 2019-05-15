//jshint esversion: 6

// Write the image's url to the console.
// Replace the image with a picture of your favorite animal.
// Make the link point to the Green Fox Academy website.
// Disable the second button.
// Replace its text with 'Don't click me!'.

var img = document.querySelector('img');
img.setAttribute('src', 'https://en.wikipedia.org/wiki/File:Panthera_tigris_tigris_Tidoba_20150306.jpg');

var link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

var body = document.querySelector('body');
var secondLink = document.querySelector('.this-one');
secondLink.setAttribute('disabled', '');
secondLink.innerHTML = 'Don\'t click me!';
