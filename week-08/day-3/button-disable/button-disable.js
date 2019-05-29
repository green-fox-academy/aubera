const field1 = document.querySelector('.first-fieldset');
const field2 = document.querySelector('.second-fieldset');

const cat = document.querySelector('#cat');
const dog = document.querySelector('#dog');
const fish = document.querySelector('#fish');

const yes = document.querySelector('#yes');
const no = document.querySelector('#no');

const love = document.querySelector('#love');
const sign = document.querySelector('#sign');

field1.addEventListener('click', e => {
  if (e.target.nodeName != 'FORM') {
    if (e.target.id === 'cat' || e.target.id === 'dog') {
      sign.removeAttribute('disabled');
    } else {
      sign.setAttribute('disabled', '');
    }
  }
  if (fish.checked && no.checked){
    sign.removeAttribute('disabled');
  }
});

field2.addEventListener('click', e => {
  if (e.target.nodeName != 'FORM') {
    if (e.target.id === 'yes') {
      love.removeAttribute('disabled');
    } else {
      love.setAttribute('disabled', '');
    }
  }
  if (fish.checked && no.checked){
    sign.removeAttribute('disabled');
  }
});

sign.addEventListener('click', e => {
  if (fish.checked && no.checked){
    alert('Sigh, we still added you to the cat facts list');
  } else {
    alert ('Thank you, you\'ve successfully signed up for cat facts');
  }
});