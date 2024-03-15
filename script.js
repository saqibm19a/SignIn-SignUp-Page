const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

function showLogin() {
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
  document.querySelector('#sup').classList.remove('active');
  document.querySelector('.tab').classList.add('active');
}

function showSignup() {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
  document.querySelector('.tab').classList.remove('active');
  document.querySelector('#sup').classList.add('active');
}

document.querySelector('#login').addEventListener('click', showLogin);
document.querySelector('#signup').addEventListener('click', showSignup);