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





   
  
  // Function to handle Google sign-in
  function signInWithGoogle() {


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