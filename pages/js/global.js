// Replace with your Firebase project configuration




var firebaseConfig = {
    apiKey: "AIzaSyB8-0G6-iS8Ep9fwOl6yBlGuUF0DxS0wdo",
    authDomain: "leetnote-7cfce.firebaseapp.com",
    projectId: "leetnote-7cfce",
    storageBucket: "leetnote-7cfce.appspot.com",
    messagingSenderId: "43966757694",
    appId: "1:43966757694:web:f80fcd4da26cdbc1a2ca6f",
    measurementId: "G-42H2T6F7DE"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
  // Function to handle Google sign-in
  function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token
        var token = result.credential.accessToken;
        // This gives you the signed-in user
        var user = result.user;

        // You can handle the signed-in user here
        console.log(user);
      })
      .catch(function(error) {
        // Handle errors here
        console.error(error);
      });
  }