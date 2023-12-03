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

const username = "seconduser";
let logfiles = [];
let course = [];
let metadata = {};

// logfile
for (let _repeat108 = 0; _repeat108 < 8; _repeat108++) {
    const logfilesData = {
        event: "joinedSpace",
        timestamp: "36685578889"
    };
    logfiles.push(logfilesData);
}

// user course
for (let _repeat100 = 0; _repeat100 < 8; _repeat100++) {
    const coursesData = {
        code: "MTS 201",
        progress: "0%"
    };
    course.push(coursesData);
}

// user metadata
metadata = {
    name: username,
    id: "62c519101bc628",
    department: "EEE",
    level: "200lv",
    firstOnline: "628229393",
    lastOnline: "63839393"
};

// payload
const dataToUpdate = {
    username: username,
    metadata: JSON.stringify(metadata),
    courses: JSON.stringify(course),
    logfile: JSON.stringify(logfiles)
};

// Update the Firebase Realtime Database
const databaseRef = ref(database, `users/${username}`);
update(databaseRef, dataToUpdate);
