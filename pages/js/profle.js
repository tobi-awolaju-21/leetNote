
async function checkSubscriptionStatus() {
    const currentPageUrl = window.location.search; // Use window.location.search instead of window.location.href
    const urlSearchParams = new URLSearchParams(currentPageUrl);
    
    const img = urlSearchParams.get('img');
    const email = urlSearchParams.get('email');

//set img and email to the right values
if (img) {
    const imgElement = document.getElementById('userImage');
    imgElement.src = img;
    imgElement.width = 200;
    imgElement.height = 200;
    imgElement.style.margin = '20px';
}

// Set the text content of the h1 element
if (email) {
    const emailElement = document.getElementById('emailAddress');
    emailElement.textContent = email;
}

  const apiEndpoint = "https://script.google.com/macros/s/AKfycbxgixYFP9fk9lfn_C7LKbkyP8-WWjoKqStk3Fi88JOJg5rSuHxXnUCxA1a91vstEr9vYg/exec?email=" + email;
  console.log(apiEndpoint+" niceProfile page");
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


