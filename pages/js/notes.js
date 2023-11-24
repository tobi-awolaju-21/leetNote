
// Get the URL from the window location
const url = window.location.href;
// Function to extract the value of a parameter from the URL
function getParameterValue(parameterName) {
  const urlSearchParams = new URLSearchParams(new URL(url).search);
  return urlSearchParams.get(parameterName);
}
// Get the value of the courseKey parameter
const courseKey = getParameterValue("courseKey");
// Log the value to the console (you can use it as needed)

document.addEventListener("DOMContentLoaded", function () {
  // Get the element with the class 'scroll-item2'
  var scrollItem = document.querySelector(".notefab");

  // Add a click event listener to the element
  scrollItem.addEventListener("click", function () {
    // Redirect to 'notes.html' when the element is clicked
    window.location.href = './test.html?courseKey=' + courseKey;
  });
});




// load courses
// URL of the JSON data = baseurl/ +surfix of webpage.json
//http://127.0.0.1:5500/pages/leetspace.html?courseKey=AGE%20202


var jsonUrl =
  "https://leetnote-7cfce-default-rtdb.firebaseio.com/courses/" +
  courseKey +
  ".json";

console.log(jsonUrl);

// Get the parent element by its class
var peopleCoursesElement = document.querySelector(".peopleCourses");

// Fetch the JSON data
fetch(jsonUrl)
  .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then((jsonData) => {
    // start of magic

    const metadataArray = JSON.parse(jsonData.metadata);

    metadataArray.forEach((item) => {
      // Creating div for outline
      if (item.outline) {
        const outlineDiv = document.createElement("div");
        outlineDiv.className = "note-tile";
        outlineDiv.innerHTML = item.outline;
        peopleCoursesElement.appendChild(outlineDiv);
      }
// people are cooking gann o
     // Creating div for video
if (item.video) {
  const noteDiv = document.createElement("div");
  noteDiv.className = "player";
  noteDiv.innerHTML = `<iframe src="${item.video}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
  peopleCoursesElement.appendChild(noteDiv);
}

      // Creating div for note
      if (item.note) {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note-tile";
        noteDiv.innerHTML = item.note;
        peopleCoursesElement.appendChild(noteDiv);
      }

      // Creating divs for questions and solutions
      if (item.question) {
        const questionsArray = JSON.parse(item.question);
        questionsArray.forEach((questionItem) => {
          // Using the provided HTML snippet for questions
          const questionTileHTML = `
                <div class="question-tile">
                    <p>${questionItem.question}</p>
                    <input class="submit-button" type="file" id="imageInput" accept="image/*" style="display: block;">
                </div>
                <div class="solution">
                    ${questionItem.solution}
                </div>
            `;

          const questionDiv = document.createElement("div");
          questionDiv.innerHTML += questionTileHTML;
          peopleCoursesElement.appendChild(questionDiv);
        });
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
