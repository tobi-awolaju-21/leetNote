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

    if (data === "true") {
      console.log("This is a subscriber");
    } else if (data === "false") {
      console.log("Not a subscriber");
      window.location.href = "./pages/profile.html?email=" + email + "&img=" + img;
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
