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

// Fetch data from the specified URL
const url = "https://leetnote-7cfce-default-rtdb.firebaseio.com/users/firstuser.json";

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

    // Assume existingUserData is the loaded data
    const existingUserData = data;

    // Parse the existing user data
    var existingCourses = JSON.parse(existingUserData.courses);
    var existingLogfile = JSON.parse(existingUserData.logfile);
    var existingMetadata = JSON.parse(existingUserData.metadata);


    var existingLogfile = [
        {"event": "joinedSpace", "timestamp": "36685578889"},
      ];
    var logfile = JSON.stringify(existingLogfile);

    // Update the Firebase Realtime Database with the existing user data
    const dataToUpdate = {
      username: existingUserData.username,
      metadata: JSON.stringify(existingMetadata),
      courses: JSON.stringify(existingCourses),
      logfile: logfile
    };

    console.log(JSON.stringify(logfile));
    
    // Update the Firebase Realtime Database
    const databaseRef = ref(database, `users/${existingUserData.username}`);
    update(databaseRef, dataToUpdate);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
