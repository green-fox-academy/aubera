//jshint esversion: 6

// 1) Fill every paragraph with the last one 's content.
// 2) Do the same again, but you should keep the cat strong.

const lastPContent = document.querySelector('.animals');
var paragraphs = document.getElementsByTagName('p');
for (i = 0; i < paragraphs.length; i++){
  paragraphs[i].textContent = lastPContent.textContent;
  alert(paragraphs[i].textContent);
}

for (i = 0; i < paragraphs.length; i++){
  paragraphs[i].innerHTML = lastPContent.innerHTML;
  alert(paragraphs[i].innerHTML);
}
