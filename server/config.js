//consuming the API request.
const firebaseConfig = {
  apiKey: "AIzaSyD6kSccasMObAYaEjiGtqquhAgv3Z15xCM",
  authDomain: "contactform-yatch.firebaseapp.com",
  databaseURL: "https://contactform-yatch-default-rtdb.firebaseio.com",
  projectId: "contactform-yatch",
  storageBucket: "contactform-yatch.appspot.com",
  messagingSenderId: "115705780781",
  appId: "1:115705780781:web:e1bd463e594058e9a376a4",
  measurementId: "G-RW4G51KSGH"
}; 
//initialize firebase.
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.firestore();

//add event listener to the form.
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
  e.preventDefault();

 //get all the values.
 var username=getInputVal('username');
 var email=getInputVal('email');
 var phone=getInputVal('phone');
 var password=getInputVal('password-input');

 console.log(username, email,phone, password);

 //enable alert
 document.querySelector('.alert').style.display='block';

 //remove alert.
 setTimeout(function() {
   document.querySelector('.alert').style.display='none';
 },3000);

 contactFormDB.collection('Custormers').add({
  name: username,
  email: email,
  phone: phone,
  password: password
 });
}

//function to get form values from the contact form.
function getInputVal(id){
  return document.getElementById(id).value;
}