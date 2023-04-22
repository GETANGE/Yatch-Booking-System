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


// add event listener to the form.
document.getElementById('contactForm').addEventListener('submit', submitForm);

async function submitForm(e){
  e.preventDefault();

  // get all the values
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password-input').value;

  // check if required fields are empty
  if (username === '' || email === '' || phone === '' || password === '') {
    alert('Please fill all the fields');
    return;
  }

  console.log(username, email, phone, password);

  // enable alert
  document.querySelector('.alert').style.display = 'block';

  // remove alert
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // check if user already exists
  const userRef = contactFormDB.collection('Customers').doc(email);
  const userDoc = await userRef.get();
  if (userDoc.exists) {
    alert('This email is already registered.');
    return;
  }

  // add user to database
  contactFormDB.collection('Customers').doc(email).set({
    name: username,
    email: email,
    phone: phone,
    password: password
  })
  .then(function() {
    console.log('User added to database');
  })
  .catch(function(error) {
    console.error('Error adding user to database: ', error);
  });
}
