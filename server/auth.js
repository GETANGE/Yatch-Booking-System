var firebaseConfig = {
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

// Get a reference to the Firebase auth service
var auth = firebase.auth();

// Get a reference to the Firestore database
var db = firebase.firestore();

// Add an event listener to the login form
var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  var email = loginForm.email.value;
  var password = loginForm.Password.value;


  // Check if the user's email and password exist in the Firestore database
  db.collection("Customers").where("email", "==", email).where("password", "==", password)
    .get()
    .then(function(querySnapshot) {
      if (querySnapshot.size > 0) {
        // User is signed in
        console.log('User signed in');
        // Redirect to the user's dashboard or homepage
        window.location.replace("http://127.0.0.1:5500/public/main.html");
      } else {
        // Handle errors here
        console.log('Error signing in');
        alert('There was an error signing in. Please try again.');
      }
    })
    .catch(function(error) {
      // Handle errors here
      console.log('Error signing in:', error);
      alert('There was an error signing in. Please try again.');
    });
});