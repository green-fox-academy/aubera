// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded,
// a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

const button = document.querySelector('button');
let initTime;
let firstClickTime;
let clickNumber = 0;

window.onload = () => {
  initTime = new Date().getTime();
};

button.addEventListener('click', (event)=> {
  clickNumber++;
  clickNumber === 1 ? firstClickTime = new Date().getTime() : '';
  if (firstClickTime - initTime >= 5000 && clickNumber >= 3){
    let paragraph = document.createElement('p');
    paragraph.textContent = '5 seconds elapsed and clicked 3 times';
    document.body.appendChild(paragraph);
    button.setAttribute('disabled', '');
  }
});
