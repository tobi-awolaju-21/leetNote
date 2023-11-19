// Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
   import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
   
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

   function signInWithGoogle() {
    console.log("trying")
    // Implement the Google sign-in logic here
    const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };
  }
      

  document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the class 'scroll-item2'
    var scrollItem = document.querySelector('img');
  
    // Add a click event listener to the element
    scrollItem.addEventListener('click', function() {
  
    // Call the signInWithGoogle function
    signInWithGoogle()
    }); 
  });



 
// load Spaces 
// URL of the JSON data
var jsonUrl = "https://leetnote-7cfce-default-rtdb.firebaseio.com/courses.json";

// Get the parent element by its class
var peopleSpacesElement = document.querySelector(".scroll-container");

// Fetch the JSON data
fetch(jsonUrl)
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then(jsonData => {
    // Now you can work with the JSON data
    console.log(jsonData);

    // Loop through each key in the JSON data
    Object.keys(jsonData).forEach(function (courseKey) {
      // Create a new div element
      var newDiv = document.createElement("div");
      newDiv.className = "scroll-item";

      // Set the content of the new div
      newDiv.innerHTML = `
       
        <div class = "status">
         Live
        </div>
        <div class="status2">
            <h1>${courseKey}</h1>
            <h4>6:00 -6:30</h4>
        </div>
      `;

      // Append the new div to the parent element
      peopleSpacesElement.appendChild(newDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });















  // load courses
// URL of the JSON data
var jsonUrl = "https://leetnote-7cfce-default-rtdb.firebaseio.com/courses.json";

// Get the parent element by its class
var peopleCoursesElement = document.querySelector(".peopleCourses");

// Fetch the JSON data
fetch(jsonUrl)
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then(jsonData => {
    // Now you can work with the JSON data
    console.log(jsonData);

    // Loop through each key in the JSON data
    Object.keys(jsonData).forEach(function (courseKey) {
      // Create a new div element
      var newDiv = document.createElement("div");
      newDiv.className = "scroll-item2";

      // Set the content of the new div
      newDiv.innerHTML = `
        <h2>${courseKey}</h2>
        <div style="display:flex;">
          <h3>9 contributors</h3>
          <h3>60/150</h3>
        </div>


<!-- Progress bar container -->
  <div class="progress-container">
    <!-- Progress bar filler -->
    <div class="progress-filler" style="width: 50%;">

</div>
  </div>
      `;

      // Append the new div to the parent element
      peopleCoursesElement.appendChild(newDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });



