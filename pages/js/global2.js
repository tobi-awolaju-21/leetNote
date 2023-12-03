async function checkSubscriptionStatus() {
  const currentPageUrl = window.location.href;
  const urlSearchParams = new URLSearchParams(currentPageUrl);

  const img = urlSearchParams.get('img');
  const email = urlSearchParams.get('email');
  const ApiEndPoint = "https://script.google.com/macros/s/AKfycbxgixYFP9fk9lfn_C7LKbkyP8-WWjoKqStk3Fi88JOJg5rSuHxXnUCxA1a91vstEr9vYg/exec?email=" + email;

  console.log(ApiEndPoint);
  // Update the API endpoint with the new URL including the email parameter
  const postData = { email };

  try {
    const response = await fetch(ApiEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();

    if (data === "true") {
      console.log("This is a subscriber");
    } else if (data === "false") {
      console.log("Not a subscriber");
      window.location.href = "./pages/profile.html?email=" + email + "&img=" + img;
    } else {
      console.log("Unexpected response from the server");
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
checkSubscriptionStatus();
