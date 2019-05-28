// On the click of the button,
// Count the items in the list
// And display the result in the result element.

const listItems = document.querySelectorAll('li');
const button = document.querySelector('button');
const resultParagraph = document.querySelector('.result');

button.onclick = () => {
  resultParagraph.textContent = Array.from(listItems).length;
};