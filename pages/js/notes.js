if (window.gc) {
  window.gc();
}

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
  var noteFab = document.querySelector(".notefab");
  noteFab.addEventListener("click", function () {
    window.location.href =
      "./test.html?courseKey=" + courseKey + "&email=" + email + "&img=" + img;
  });

  var jsonUrl =
    "https://leetnote-7cfce-default-rtdb.firebaseio.com/courses/" + decodeURIComponent(courseKey) +
    ".json";
    console.log("jsonUrl");
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
          const outlineDiv = document.createElement("div");
          outlineDiv.className = "note-tile";
          outlineDiv.innerHTML = item.outline;
          peopleCoursesElement.appendChild(outlineDiv);
        }
        if (item.video) {
          const noteDiv = document.createElement("div");
          noteDiv.className = "player";
          noteDiv.innerHTML = `<iframe src="${item.video}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
          peopleCoursesElement.appendChild(noteDiv);
        }
        if (item.note) {
          const noteDiv = document.createElement("div");
          noteDiv.className = "note-tile";
          noteDiv.innerHTML = item.note;
          peopleCoursesElement.appendChild(noteDiv);
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
