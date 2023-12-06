// URL of the JSON data = baseurl/ +surfix of webpage.json
//http://127.0.0.1:5500/pages/leetspace.html?courseKey=AGE%20202

// Get the URL from the window location
const url = window.location.href;
// Function to extract the value of a parameter from the URL
function getParameterValue(parameterName) {
  const urlSearchParams = new URLSearchParams(new URL(url).search);
  return urlSearchParams.get(parameterName);
}
// Get the value of the courseKey parameter
const courseKey = getParameterValue("courseKey");
const email = getParameterValue("email");
// load pfp image
const userImage = document.querySelector('.user');
userImage.src = getParameterValue("img");
// Log the value to the console (you can use it as needed)
