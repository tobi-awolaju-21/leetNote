// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";




const url = window.location.href;
function getParameterValue(parameterName) {
  const urlSearchParams = new URLSearchParams(new URL(url).search);
  return urlSearchParams.get(parameterName);
}

const img = getParameterValue("img");



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8-0G6-iS8Ep9fwOl6yBlGuUF0DxS0wdo",
  authDomain: "leetnote-7cfce.firebaseapp.com",
  projectId: "leetnote-7cfce",
  storageBucket: "leetnote-7cfce.appspot.com",
  messagingSenderId: "43966757694",
  appId: "1:43966757694:web:f80fcd4da26cdbc1a2ca6f",
  measurementId: "G-42H2T6F7DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Implement the Google sign-in logic here
const googleProvider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    // Log the user object
    console.log('User signed in:', user);
    // show courses and space
    const peopleSpacesElement = document.querySelector('.peopleSpaces');
    peopleSpacesElement.style.display = 'block';
    const peopleCoursesElement = document.querySelector('.peopleCourses');
    peopleCoursesElement.style.display = 'block';
    const fab = document.querySelector('.fab');
    fab.style.display = 'flex';
    //hide landing
    const landing = document.querySelector('.landing');
    landing.style.display = 'none'
    console.log('Loading image too');
    // Get the user's photo URL
    const photoURL = user.photoURL;
    // Get the user's photo URL
    const emailUser = user.email;
    // Change the src attribute of the image with class name 'user'
    const userImage = document.querySelector('.user');
    if (userImage) {
      userImage.src = photoURL;
    }

  
   
    // Set the text content of the emailElement to "hello world"
    const emailElement = document.getElementsByClassName('email')[0];
    emailElement.textContent = emailUser;
    // Log the value of the 'email' element
    console.log('Email element value:', emailElement.innerText);

  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

// Now you can call signInWithGoogle when you want to trigger the Google sign-in.
document.addEventListener('DOMContentLoaded', function() {
  // Get the element with the class 'scroll-item2'
  var scrollItem = document.querySelector('.user');

  // Add a click event listener to the element
  scrollItem.addEventListener('click', function() {
    const emailElement = document.querySelector('.email');
  
    // Define or pass 'img' variable
    // For example: var img = document.getElementById('yourImgId');




    var email = "deyplay@gmail.com";
    var imgi = "eyplay again";
    
    const ToProfile = () => {
    try {
     window.location.href = "./profile.html?email=" +email+ "&img=" + imgi;
    } catch (error) {
     window.location.href = ".pages/profile.html?email=" +email+ "&img=" + imgi;
    } 
    };
    

    // Call the signInWithGoogle function
    if (!img) {
      if (emailElement.textContent === "") {
        signInWithGoogle();
        console.log("mail: " + emailElement.textContent);
        console.log("null img");
      }else{
        console.log("going to profile");
      ToProfile()
      }
    } else {
      console.log("to profile ")
     signInWithGoogle();
    
    }
  });
});



