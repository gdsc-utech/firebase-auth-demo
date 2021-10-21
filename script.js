// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";

// import the firebase authentication functions we need
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

/*  
    Need to import other services? 
    Replace your import lines using the following pattern:

    import { } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-SERVICE.js'

    (where SERVICE is an SDK name such as firebase-firestore). 
*/

// Your web app's Firebase configuration
// this lets Firebase know how to identify our app and grant access to its APIs
// Replace with your own firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoaSpmop9PTV3L-E4_lFpFacOI3op_EV8",
  authDomain: "auth-demo-d9ca9.firebaseapp.com",
  projectId: "auth-demo-d9ca9",
  storageBucket: "auth-demo-d9ca9.appspot.com",
  messagingSenderId: "1055930984540",
  appId: "1:1055930984540:web:a903c809808efc4a979e99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() // creates a reference to the firebase authentication module

// grabs our input fields from the HTML
let email = document.getElementById('email-input')
let password = document.getElementById('pwd-input')

// assign click functions to our buttons
//note that brackets '()' are not added to the end of the function names when assigning it to a button
document.getElementById('signup').onclick = signUp
document.getElementById('signin').onclick = signIn
document.getElementById('signout').onclick = logOut

// This function creates a user and displays the logout option
function signUp() {

    createUserWithEmailAndPassword(auth, email.value, password.value).
        then(function () {
            // run if successful
            alert('USER CREATED AND SIGNED IN')
            document.getElementById('loggedin').style.display = "block"
        })
        .catch(function (error) {
            //run if error
            alert(error.message)
    })
}

// This function signs in an already existing user and displays the logout option
function signIn() {
    signInWithEmailAndPassword(auth, email.value, password.value).
        then(function () {
            alert('USER SIGNED IN')
            document.getElementById('loggedin').style.display = "block"
        })
        .catch(function (error) {
            //run if error
            alert(error.message)
    })
}

// This function signs out a user
function logOut() {
    signOut(auth).then(function () {
        alert('USER LOGGED OUT')
        document.getElementById('loggedin').style.display = "none"
    })
}

// To further understand the then and catch syntax, read up on Javascript Promises

// TODO: research how to :
// 1. check if a user is already logged in
// 2. update or delete users from firebase

