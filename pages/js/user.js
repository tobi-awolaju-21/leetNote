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

const existingUserData = {
    "courses": "[{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"},{\"code\":\"MTS 201\",\"progress\":\"0%\"}]",
    "logfile": "[{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"},{\"event\":\"joinedSpace\",\"timestamp\":\"36685578889\"}]",
    "metadata": "{\"firstOnline\":\"628229393\",\"level\":\"200lv\",\"name\":\"firstuser\",\"lastOnline\":\"63839393\",\"id\":\"62c519101bc628\",\"department\":\"EEE\"}",
    "username": "firstuser"
};

// Parse the existing user data
const existingCourses = JSON.parse(existingUserData.courses);
const existingLogfile = JSON.parse(existingUserData.logfile);
const existingMetadata = JSON.parse(existingUserData.metadata);

// Update the Firebase Realtime Database with the existing user data
const dataToUpdate = {
    username: existingUserData.username,
    metadata: existingMetadata,
    courses: existingCourses,
    logfile: existingLogfile
};

// Update the Firebase Realtime Database
const databaseRef = ref(database, `users/${existingUserData.username}`);
update(databaseRef, dataToUpdate);
