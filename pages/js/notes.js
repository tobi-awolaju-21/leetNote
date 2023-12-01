const url = window.location.href;
function getParameterValue(parameterName) {
  const urlSearchParams = new URLSearchParams(new URL(url).search);
  return urlSearchParams.get(parameterName);
}
const courseKey = getParameterValue("courseKey");
const email = getParameterValue("email");
// load pfp image
const userImage = document.querySelector('.user');
userImage.src = getParameterValue("img");



document.addEventListener("DOMContentLoaded", function () {
  var scrollItem = document.querySelector(".notefab");
  scrollItem.addEventListener("click", function () {
    window.location.href =
      "./test.html?courseKey=" + courseKey + "&email=" + email+"&img="+img;
  });
});




var jsonUrl = "https://leetnote-7cfce-default-rtdb.firebaseio.com/courses/" +
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
// tobi was here