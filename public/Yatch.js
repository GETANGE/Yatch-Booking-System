function passwordCheck(){
  //show passwords created by use of the checkbox.
const passwordInput = document.getElementById('password-input');
const showPasswordCheckbox = document.getElementById('show-password-checkbox');

showPasswordCheckbox.addEventListener('change', function() {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
}
passwordCheck();

function blur(){
 //focusing on blur
//username.
const username = document.getElementById('username');
const error1 = document.getElementById('error1');

username.addEventListener('blur', function() {
  if (username.value.trim() === '') {
    error1.textContent = 'Username cannot be empty';
    error1.style.display = 'block'; // Show the error message
    username.classList.add('invalid');
  } else {
    error1.style.display = 'none'; // Hide the error message
    username.classList.remove('invalid');
   }
 });
}
blur();


function blurEmail(){
  //focusing on the email
//email.

const email = document.getElementById('email');
const error2 = document.getElementById('error2');


email.addEventListener('blur',function(){
if(!email.value.includes('@')){
  email.classList.add('invalid');
  error2.innerHTML = 'Please enter a valid email address';
  }
 });

email.addEventListener('focus',function(){
if(this.classList.contains('invalid')){
  this.classList.remove('invalid');
  error2.innerHTML = '';
  }
 });
}
blurEmail();