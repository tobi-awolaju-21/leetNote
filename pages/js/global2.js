async function checkSubscriptionStatus() {
  const currentPageUrl = window.location.href;
  const urlSearchParams = new URLSearchParams(currentPageUrl);

  const img = urlSearchParams.get('img');
  const email = urlSearchParams.get('email');
  const ApiEndPoint = "https://www.google.com";
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

    if (data === true) {
      console.log("This is a subscriber");




    } else {
      console.log("Not a subscriber");

     window.location.href = "./pages/profile.html?email=" +email+ "&img=" + img;

    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
checkSubscriptionStatus();