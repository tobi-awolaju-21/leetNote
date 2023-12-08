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
  
  
//start of index

var myCourseJson; // Default value is set to an 


var email = emailElement.innerText;
  // Log the value of the 'email' element
  console.log('Email :',email);


email = email.replace('@gmail.com', '');

// get department via
var getDepartment = "https://leetnote-7cfce-default-rtdb.firebaseio.com/users/" + email + ".json";

fetch(getDepartment)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        var department = data.department;
        usersCourse(department);
    })
    .catch(error => {
        console.error('Error during fetch:', error);
       
    const userImage2 = document.querySelector('.user');
        var imgi = userImage2.src;
        window.location.href = "./pages/profile.html?email=" + email+"@gmail.com" + "&img=" + imgi;
      });


    function usersCourse(department) {
      // get courses via
      var getCourses = "https://script.google.com/macros/s/AKfycbxwzQ_4MCVJKPsZCeAc7sradMu8VFIy6ab25-voByVkrKWJlIkgwqltXeOQHU0CYGjP/exec?department=" + department;
  
      fetch(getCourses)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              console.log('Response from the server:', data);
              renderCourses(data);
              myCourseJson = data;
              LoadContents();
          })
          .catch(error => {
             

              const emailElement = document.querySelector('.email');
              // Define or pass 'img' variable
              // For example: var img = document.getElementById('yourImgId');
              var email = emailElement.innerText;
          const userImage2 = document.querySelector('.user');
              var imgi = userImage2.src;
              window.location.href = "./pages/profile.html?email=" +  email+"@gmail.com" + "&img=" + imgi;

              console.error('Error during fetch:', error);
              // Handle the error, you can log it or redirect to a different page

          });
  }

// render Courses
function renderCourses(coursesArray) {
    const peopleCoursesElement = document.querySelector(".peopleCourses");

    coursesArray.forEach(course => {
        const { code, progress } = course;

        const newDiv2 = document.createElement("div");
        newDiv2.className = "scroll-item2";
        newDiv2.innerHTML = `
            <h2>${code}</h2>
            <div style="display:flex;">
                <h3> your father paid for it </h3>
               
        `;

        function handleCourseClick(clickedCourseCode) {
            const encodedCourseCode = encodeURIComponent(clickedCourseCode);
            const emailElement = document.getElementsByClassName("email")[0];
            const imageElement = document.getElementsByClassName('user')[0];
            const email = emailElement.innerText;
            const img = imageElement.src;

            window.location.href = `pages/notes.html?courseKey=${encodedCourseCode}&email=${email}&img=${img}`;
        }

        newDiv2.addEventListener("click", function () {
            handleCourseClick(code);
        });

        peopleCoursesElement.appendChild(newDiv2);
    });
}



function LoadContents(){
var jsonUrl =
  "https://leetnote-7cfce-default-rtdb.firebaseio.com/classroom.json";
var peopleSpacesElement = document.querySelector(".scroll-container");
fetch(jsonUrl)
  .then((response) => {
if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
 return response.json();
  })
  .then((jsonData) => {
 console.log(jsonData);
 Object.keys(jsonData).forEach(function (courseKey) {
 

var newDiv = document.createElement("div");
      newDiv.className = "scroll-item";
 newDiv.innerHTML = `
    <div class="status">
      Live
    </div>
    <div class="status2">
      <p style="font-size: 20px;
      font-weight: 400;
      padding:0px;
      margin:0px; ">${courseKey}</p>
      <h4>6:00 - 6:30</h4>
    </div>
  `;


function redirectToNotes(clickedCourseKey) {
var encodedCourseKey = encodeURIComponent(clickedCourseKey);
const emailElement = document.getElementsByClassName("email")[0];
const imageElement = document.getElementsByClassName('user')[0];
var email = emailElement.innerText;
var img = imageElement.src;

window.location.href =
          "pages/leetspace.html?courseKey=" +
          encodedCourseKey +
          "&email=" +
          email+"&img="+img;
      }
 newDiv.addEventListener("click", function () {
 redirectToNotes(courseKey);
        checkIfUserSignedIn();
      });
peopleSpacesElement.appendChild(newDiv);

    });



  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });



}


//end of index





























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
    var email = emailElement.innerText;
const userImage2 = document.querySelector('.user');
    var imgi = userImage2.src;
    const ToProfile = () => {
    try {
     window.location.href = "./pages/profile.html?email=" +email+ "&img=" + imgi;
    } catch (error) {
   //  window.location.href = ".pages/profile.html?email=" +email+ "&img=" + imgi;
    } 
    };
    // Call the signInWithGoogle function
    if (!img) {
      if (emailElement.textContent === "") {
        signInWithGoogle();
        console.log("mail: " + emailElement.textContent);
        console.log("null img");
        console.log("to profile illegally")
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




