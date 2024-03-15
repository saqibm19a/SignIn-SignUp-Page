const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

function showLogin() {
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
  document.querySelector('.tab.active').classList.remove('active');
  document.querySelector('#login').classList.add('active');
}

function showSignup() {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
  document.querySelector('.tab.active').classList.remove('active');
  document.querySelector('#signup').classList.add('active');
}

document.querySelector('#login').addEventListener('click', showLogin);
document.querySelector('#signup').addEventListener('click', showSignup);