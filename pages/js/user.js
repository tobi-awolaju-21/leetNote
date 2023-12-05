// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8-0G6-iS8Ep9fwOl6yBlGuUF0DxS0wdo",
  authDomain: "leetnote-7cfce.firebaseapp.com",
  projectId: "leetnote-7cfce",
  storageBucket: "leetnote-7cfce.appspot.com",
  messagingSenderId: "43966757694",
  appId: "1:43966757694:web:f80fcd4da26cdbc1a2ca6f",
  measurementId: "G-42H2T6F7DE"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

// Parse the existing user data
let existingCourses;
let existingLogfile;
let existingDepartment;
let existingUserData; // Declare the variable outside the fetch block



// Get the email from the query parameter in the URL
const urlParams = new URLSearchParams(window.location.search);
const mail = urlParams.get('email');

// Check if the email is present and exclude "@gmail.com"
const formattedMail = mail ? mail.replace('@gmail.com', '') : '';

// Construct the final URL
const url = `https://leetnote-7cfce-default-rtdb.firebaseio.com/users/${formattedMail}.json`;


// Function to update the username
function updateCourses(courses) {
    const databaseRef = ref(database, `users/${formattedMail}`);
    const dataToUpdate = {
      username: formattedMail,
      department: JSON.stringify(existingDepartment),
      courses: courses,
      logfile: JSON.stringify(existingLogfile)
    };
  
    // Update the Firebase Realtime Database
    update(databaseRef, dataToUpdate);
  }





fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Use the loaded data
    console.log("Loaded data:", data);

    // Now you can work with the loaded data, for example, update the Realtime Database
    existingUserData = data;
    // Parse the existing user data
    existingCourses = JSON.parse(existingUserData.courses);
    existingLogfile = JSON.parse(existingUserData.logfile);
    existingDepartment = existingUserData.department;
    // Update the Firebase Realtime Database with the existing user data

    const dataToUpdate = {
      username: formattedMail,
      department: existingDepartment,
      courses: JSON.stringify(existingCourses),
      logfile: JSON.stringify(existingLogfile),
    };

    // Update the Firebase Realtime Database
    const databaseRef = ref(database, `users/${formattedMail}`);
    update(databaseRef, dataToUpdate);
  })
  .catch(error => {
    console.log("You are a new user, let create your account")
    console.error("Error fetching data:", error);
  });

function updateCourseJSON(department) {
  const apiEndpoint = `https://script.google.com/macros/s/AKfycbxwzQ_4MCVJKPsZCeAc7sradMu8VFIy6ab25-voByVkrKWJlIkgwqltXeOQHU0CYGjP/exec?department=${department}`;

  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      console.log(JSON.stringify(data));
      updateCourses(JSON.stringify(data))

      const dataToUpdate = {
        username: existingUserData.username,
        department: department,
        courses: JSON.stringify(data),
        logfile: JSON.stringify(existingLogfile),
      };

      // Update firebase RDB
      // ...
    })
    .catch(error => console.error('Error during fetch:', error.message));
}

// code for departments dropdown
document.addEventListener("DOMContentLoaded", function () {
  // JSON data
  const jsonData = [
    { "department": "EEE 200lv" },
    { "department": "CVE 200lv" },
    { "department": "MEE 200lv" },
    { "department": "AGE 200lv" },
    { "department": "ICT 200lv" },
    { "department": "CPE 200lv" },
    { "department": "IPE 200lv" },
    { "department": "MME 200lv" },
    { "department": "MNE 200lv" }
  ];

  // Function to populate dropdown with JSON data
  function populateDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');

    jsonData.forEach(item => {
      const link = document.createElement('a');
      link.textContent = item.department;
      link.addEventListener('click', function () {
        document.getElementById('selected-item').textContent = item.department;
        console.log("Selected Department:", item.department);
        updateCourseJSON(item.department);
      });
      dropdownContent.appendChild(link);
    });
  }

  // Call the function to populate dropdown
  populateDropdown();
});
