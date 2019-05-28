// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//  - the nav buttons (up, down, left, right) move the background by 10px
//  - the zoom buttons increase/decrease the image by 20%
//  - attach only two event listeners to the nav element
//    - one for navigation
//    - one for zooming

const imageInspector = document.querySelector('.img-inspector');
const navigationBar = document.querySelector('nav');
const buttons = document.querySelectorAll('nav button');
let initialZoomRatio = 200;
let horizontalCorrection = 0;
let verticalCorrection = 0;
let horizontalOperand;
let verticalOperand;

navigationBar.addEventListener('click', function (event) {
  let buttonClicked = event.target.textContent;
  buttonClicked === 'Up' ? verticalCorrection += 10 : '';
  buttonClicked === 'Down' ? verticalCorrection -= 10 : '';
  buttonClicked === 'Left' ? horizontalCorrection += 10 : '';
  buttonClicked === 'Right' ? horizontalCorrection -= 10 : '';

  verticalCorrection <= 0 ? verticalOperand = '-' : verticalOperand = '+';
  horizontalCorrection <= 0 ? horizontalOperand = '-' : horizontalOperand = '+';

  imageInspector.style.backgroundPosition = `calc(50% ${horizontalOperand} ${Math.abs(horizontalCorrection)}px) calc(50% ${verticalOperand} ${Math.abs(verticalCorrection)}px)`;
}, false);

navigationBar.addEventListener('click', function (event) {
  let buttonClicked = event.target.textContent;
  buttonClicked === 'Zoom in' ? initialZoomRatio *= 1.2 : '';
  buttonClicked === 'Zoom out' ? initialZoomRatio *= .8 : '';

  imageInspector.style.backgroundSize = `${initialZoomRatio}%`;
}, false);


