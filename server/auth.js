import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
  
//initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById('login-form');


loginForm.addEventListener('submit', (e)=>{
 e.preventDefault(); //prevent default  
 const email = loginForm.email.value;
 const password = loginForm.password-input.value;


 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
     //logged in
     const user = userCredential.user;
     console.log('User logged in',user);
     //...
 })
 .catch((error) => {
   console.log('User not logged in ',error);
 });
});