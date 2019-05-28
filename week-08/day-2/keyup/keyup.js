// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

const bodyHTML = document.querySelector('body');
const h1Tag = document.querySelector('h1');

bodyHTML.addEventListener('keyup', (event) => {
  console.log(event);
  h1Tag.textContent = `Last pressed key code is: ${event.which}`;
});