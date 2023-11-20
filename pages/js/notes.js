document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the class 'scroll-item2'
    var scrollItem = document.querySelector('.notefab');

    // Add a click event listener to the element
    scrollItem.addEventListener('click', function() {
        // Redirect to 'notes.html' when the element is clicked
        window.location.href = './test.html';
    }); 
});










  // load courses
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
const courseKey = getParameterValue('courseKey');
// Log the value to the console (you can use it as needed)
console.log(courseKey);


var jsonUrl = "https://leetnote-7cfce-default-rtdb.firebaseio.com/courses/" + courseKey + ".json"



// Get the parent element by its class
var peopleCoursesElement = document.querySelector(".peopleCourses");

// Fetch the JSON data
fetch(jsonUrl)
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then(jsonData => {


console.log("deyplay");

   })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


