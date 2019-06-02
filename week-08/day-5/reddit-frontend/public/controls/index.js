const posts = document.querySelector('.posts');
const addPostButton = document.querySelector('.actions').querySelector('button');
const addPostDiv = document.querySelector('.add-post');

addPostButton.addEventListener('click', showAddPostSection);
addPostDiv.querySelector('button').addEventListener('click', (e)=>{
  e.preventDefault();
  createNewPost(getUserLoggedIn());
  addPostDiv.style.display = 'none';
});

window.onload = getAllPosts(getUserLoggedIn());

function getAllPosts(who) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/posts/', true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('username', who);
  xhr.send();
  xhr.onload = (data) => {
    listPosts(JSON.parse(data.target.response));
  };
}


function listPosts(list) {
  let responseDataKeys = ['post_id', 'title', 'url', 'timestamp', 'score', 'owner_name', 'vote'];
  for (let i = 0; i < list.length; i++) {
    let post = document.createElement('div');
    post.setAttribute('id', list[i].post_id);
    post.setAttribute('class', 'post');

    let voting = document.createElement('div');
    voting.classList.add('voting');

    let upvote = document.createElement('div');
    upvote.style.backgroundImage = 'url(/assets/upvote.png)';
    upvote.addEventListener('click', () => {
      //Here should change class to make upvote button color changing
      putVote(list[i].post_id, 'up');
    });

    let downvote = document.createElement('div');
    downvote.style.backgroundImage = 'url(/assets/downvote.png)';
    downvote.addEventListener('click', () => {
      //Here should change class to make downvote button color changing
      putVote(list[i].post_id, 'down');
    });

    let score = document.createElement('div');
    score.textContent = list[i].score;
    voting.appendChild(upvote);
    voting.appendChild(score);
    voting.appendChild(downvote);

    checkVoteButtonsOnLoad(voting, list[i].vote);

    let content = document.createElement('div');
    content.classList.add('content');

    let anchor = document.createElement('a');
    anchor.textContent = list[i].title;
    anchor.setAttribute('href', list[i].url);
    let timeAndOwner = document.createElement('p');
    timeAndOwner.textContent = checkTime(list[i].timestamp, list[i].owner_name);
    content.appendChild(anchor);
    content.appendChild(timeAndOwner);

    let options = document.createElement('div');
    options.classList.add('options');

    post.appendChild(voting);
    post.appendChild(content);
    post.appendChild(options);

    if (getUserLoggedIn() === list[i].owner_name){
      let deleteButton = document.createElement('div');
      deleteButton.classList.add('delete');
      deleteButton.style.backgroundImage = 'url(/assets/waste-bin.png)';
      deleteButton.addEventListener('click', () => {
        deletePost(list[i].post_id);
        while (posts.firstChild) {
          posts.removeChild(posts.firstChild);
        }
        getAllPosts(getUserLoggedIn());
      });
      options.appendChild(deleteButton);
      let editButton = document.createElement('div');
      editButton.classList.add('edit');
      editButton.style.backgroundImage = 'url(/assets/pencil-edit-button.png)';
      editButton.addEventListener('click', () => {
        updatePost(list[i].post_id, getUserLoggedIn(), list[i].title, list[i].url);
      });
      options.appendChild(editButton);
    }


    posts.appendChild(post);
  }
}

function checkTime(postTime, username){
  let actualDate = Date.now()/1000;
  let creationDate;
  let timeElapsedInSeconds = (actualDate - postTime);
  if (Math.floor(timeElapsedInSeconds / 604800) > 0){
    creationDate = Math.floor(timeElapsedInSeconds / 604800) + ' weeks ago';
  } else if (Math.floor(timeElapsedInSeconds / 86400) > 0){
    creationDate = Math.floor(timeElapsedInSeconds / 86400) + ' days ago';
  } else if (Math.floor(timeElapsedInSeconds / 3600) > 0){
    creationDate = Math.floor(timeElapsedInSeconds / 3600)  + ' hours ago';
  } else if (Math.floor(timeElapsedInSeconds / 60) > 0){
    creationDate = Math.round(timeElapsedInSeconds / 60) + ' minutes ago';
  } else {
    creationDate = Math.round(timeElapsedInSeconds) + ' seconds ago';
  }
  return `Submitted ${creationDate} by ${username}`;
}

function getUserLoggedIn(){
  return sessionStorage.getItem('redditUserName');
}

function putVote(post_id, type){
  if (getUserLoggedIn()){
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:3000/posts/' + post_id + '/' + type + 'vote', true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('username', getUserLoggedIn());
    xhr.send();
    xhr.onload = (data) => {
      let score = JSON.parse(data.target.response)[0].score;
      let vote = JSON.parse(data.target.response)[0].vote;
      let post = document.getElementById(post_id);
      post.firstElementChild.children[1].textContent = score;
      checkVoteButtonsOnVote(post_id, vote);
    };
  } else {
    window.location.href = 'http://localhost:3000/login';
  }
}

function deletePost(post_id){
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', 'http://localhost:3000/posts/' + post_id, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('username', getUserLoggedIn());
  xhr.send();
  xhr.onload = (data) => {
    console.log(xhr.status);
  };
}

function showAddPostSection(){
  if (getUserLoggedIn()){
    addPostDiv.querySelector('button').textContent = 'SUBMIT';
    addPostDiv.style.display = 'block';
  } else {
    window.location.href = 'http://localhost:3000/login';
  }
}

function createNewPost(who){
  let title = addPostDiv.querySelectorAll('input')[0].value;
  let url = addPostDiv.querySelectorAll('input')[0].value;
  let reqBody = {};
  reqBody.title = title;
  reqBody.url = url;
  console.log(reqBody);
  let json = JSON.stringify(reqBody);
  console.log(json);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/posts/', true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('username', who);
  xhr.send(json);
  xhr.onload = (data) => {
    listPosts(JSON.parse(data.target.response));
  };
}

function updatePost(post_id, who, title, url){
  addPostDiv.querySelectorAll('input')[0].value = title;
  addPostDiv.querySelectorAll('input')[1].value = url;
  addPostDiv.querySelector('button').textContent = 'UPDATE';
  addPostDiv.style.display = 'block';
  let data = {};
  data.title = addPostDiv.querySelectorAll('input')[0].value;
  data.url = addPostDiv.querySelectorAll('input')[0].value;
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', 'http://localhost:3000/posts/' + post_id, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('username', who);
  xhr.send(JSON.stringify(data));
  xhr.onload = (data) => {
    console.log(JSON.parse(data.target.response));
  };
}

function checkVoteButtonsOnVote(post_id, vote){
  let post = document.getElementById(post_id);
  if (vote === 0){
    post.firstElementChild.children[0].style.backgroundImage = 'url(/assets/upvote.png)';
    post.firstElementChild.children[2].style.backgroundImage = 'url(/assets/downvote.png)';
  } else if (vote === 1) {
    post.firstElementChild.children[0].style.backgroundImage = 'url(/assets/upvoted.png)';
    post.firstElementChild.children[2].style.backgroundImage = 'url(/assets/downvote.png)';
  } else if (vote === -1){
    post.firstElementChild.children[0].style.backgroundImage = 'url(/assets/upvote.png)';
    post.firstElementChild.children[2].style.backgroundImage = 'url(/assets/downvoted.png)';
  }
}

function checkVoteButtonsOnLoad(voting, vote){
  if (vote === 0){
    voting.children[0].style.backgroundImage = 'url(/assets/upvote.png)';
    voting.children[2].style.backgroundImage = 'url(/assets/downvote.png)';
  } else if (vote === 1) {
    voting.children[0].style.backgroundImage = 'url(/assets/upvoted.png)';
    voting.children[2].style.backgroundImage = 'url(/assets/downvote.png)';
  } else if (vote === -1){
    voting.children[0].style.backgroundImage = 'url(/assets/upvote.png)';
    voting.children[2].style.backgroundImage = 'url(/assets/downvoted.png)';
  }
}