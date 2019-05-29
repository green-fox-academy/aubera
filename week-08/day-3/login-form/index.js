document.querySelector(".toggle-password").addEventListener('click', e => {
  console.log('siker');
  if (e.target.classList.contains('fa-eye')){
    e.target.classList.remove('fa-eye');
    e.target.classList.add('fa-eye-slash');
  } else {
    e.target.classList.remove('fa-eye-slash');
    e.target.classList.add('fa-eye');
  }
  let input = document.querySelector('.password');
  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }
});