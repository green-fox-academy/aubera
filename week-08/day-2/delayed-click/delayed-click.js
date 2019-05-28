// Create a simple HTML document with one button. If the user clicks the button
// it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

const button = document.querySelector('button');
button.onclick = setTimeout(()=>{
  let paragraph = document.createElement('p');
  paragraph.textContent = '2 seconds elapsed';
  document.body.appendChild(paragraph);
}, 2000);