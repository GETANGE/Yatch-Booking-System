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

//focusing on blur
//username.
const username = document.getElementById('username');
const error1= document.getElementById('error1');

username.addEventListener('blur',function(){
  if(!username.value.trim()===''){
    username.classList.add('invalid');
    error1.innerHTML='Username cannot be empty'
  }
})
username.addEventListener('focus', function(){
  if(this.classList.contains('invalid')){
    //remove the "error" indication.
    this.classList.remove('invalid');
    error1.innerHTML='';
  }
})

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