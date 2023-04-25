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
  //initialize variables.
  const auth = firebase.auth();
  const database = firebase.database();