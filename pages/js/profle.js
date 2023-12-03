async function checkSubscriptionStatus() {
    const currentPageUrl = window.location.href;
  const urlSearchParams = new URLSearchParams(currentPageUrl);
  
  const img = urlSearchParams.get('img');
  const email = urlSearchParams.get('email');
  const apiEndpoint = "https://script.google.com/macros/s/AKfycbxgixYFP9fk9lfn_C7LKbkyP8-WWjoKqStk3Fi88JOJg5rSuHxXnUCxA1a91vstEr9vYg/exec?email=" + email;
  
  // Make a GET request to the API endpoint
  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      // Log the response data to the console
      console.log("API Response:", data);
  
      if (data === true) {
        console.log("This is a subscriber");
         // Get the reference to the div element
  var subscribeBtn = document.getElementById('subscribeBtn');

  // Set the display property to "none" to hide the div
  subscribeBtn.style.display = 'none';

// already a subscribber
        
      } else if (data === false) {
        console.log("Not a subscriber");

// you do not have any active subscribsion, sub

 // Get the reference to the div element
 var subscribeBtn = document.getElementById('subscribeBtn');

 // Set the display property to "none" to hide the div
 subscribeBtn.style.display = 'block';


      } else {
        console.log("Unexpected response from the server");
      }
  
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  
  
  
  
  }
  
  // Call the async function
  checkSubscriptionStatus();