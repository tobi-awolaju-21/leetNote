import confetti from "https://cdn.skypack.dev/canvas-confetti";



const url = window.location.href;

function getParameterValue(parameterName) {
  const urlSearchParams = new URLSearchParams(new URL(url).search);
  return urlSearchParams.get(parameterName);
}

const courseKey = getParameterValue("courseKey");
const email = getParameterValue("email");
const img = getParameterValue("img");

// load pfp image
const userImage = document.querySelector('.user');
userImage.src = getParameterValue("img");

document.addEventListener("DOMContentLoaded", function () {
 

  var jsonUrl =
    "https://leetnote-7cfce-default-rtdb.firebaseio.com/courses/" +
    courseKey +
    ".json";
  var peopleCoursesElement = document.querySelector(".peopleCourses");

  fetch(jsonUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      const metadataArray = JSON.parse(jsonData.metadata);
      metadataArray.forEach((item) => {
        if (item.outline) {
          
        }
        if (item.video) {
          
        }
        if (item.note) {
         
        }
        if (item.question) {
          const questionsArray = JSON.parse(item.question);
          questionsArray.forEach((questionItem) => {
            const questionTileHTML = `
              <div class="question-tile">
                <p>${questionItem.question}</p>
                <input class="submit-button" type="file" id="imageInput" accept="image/*" style="display: block;">
              </div>

              <style>
                .solution-wrapper {
                  cursor: pointer;
                  user-select: none;
                  /* Optional: Add some styles for better visual indication */
                  border: 1px solid #ccc;
                  padding: 10px;
                  border-radius: 5px;
                  margin: 15px;
                }

                .solution-content {
                  display: none;
                }
              </style>

              <div class="solution-wrapper">
                <div class="solution-content" id="solutionContent">
                  ${questionItem.solution}
                </div>
                <div class="hint-text">
                  Click to reveal solution
                </div>
              </div>
            `;

            const questionDiv = document.createElement("div");
            questionDiv.innerHTML += questionTileHTML;
            peopleCoursesElement.appendChild(questionDiv);
          });
        }
      });

      // Add event listeners for solution wrappers
      const solutionWrappers = document.querySelectorAll(".solution-wrapper");

      solutionWrappers.forEach((solutionWrapper) => {
        solutionWrapper.addEventListener("click", function (event) {
          // Get the clicked element
          const clickedElement = event.currentTarget;

          // Find the solution content and hint text within the clicked element
          var solutionContent = clickedElement.querySelector('.solution-content');
          var hintText = clickedElement.querySelector('.hint-text');

          // Toggle visibility
          if (solutionContent.style.display === 'none') {
            // If solution is hidden, reveal it
            solutionContent.style.display = 'block';
            hintText.style.display = 'none';
          } else {
            // If solution is visible, hide it
            solutionContent.style.display = 'none';
            hintText.style.display = 'block';
          }
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});



confetti();

window.addEventListener("click", () => {
  confetti();
});
