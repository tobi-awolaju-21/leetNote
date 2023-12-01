import confetti from "https://cdn.skypack.dev/canvas-confetti";



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




confetti();

window.addEventListener("click", () => {
  confetti();
});
