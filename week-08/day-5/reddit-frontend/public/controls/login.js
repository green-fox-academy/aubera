const button = document.getElementsByTagName('button')[0];
const username = document.querySelectorAll('input')[0];
const password = document.querySelectorAll('input')[1];



button.onclick = (event)=> {
  event.preventDefault();
  checkLoginData();
};

function checkLoginData() {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/login', true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('username', username.value);
  xhr.setRequestHeader('password', password.value);
  xhr.send();
  xhr.onload = (data) => {
    // console.log(xhr.status);
    sessionStorage.setItem('redditUserName', JSON.parse(data.target.response)[0].user_name);
    window.location.href = 'http://localhost:3000/';
  };
}


