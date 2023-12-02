var jsonUrl =
  "https://leetnote-7cfce-default-rtdb.firebaseio.com/classroom.json";
var peopleSpacesElement = document.querySelector(".scroll-container");
fetch(jsonUrl)
  .then((response) => {
if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
 return response.json();
  })
  .then((jsonData) => {
 console.log(jsonData);
 Object.keys(jsonData).forEach(function (courseKey) {
var newDiv = document.createElement("div");
      newDiv.className = "scroll-item";
 newDiv.innerHTML = `
    <div class="status">
      Live
    </div>
    <div class="status2">
      <h1>${courseKey}</h1>
      <h4>6:00 - 6:30</h4>
    </div>
  `;


function redirectToNotes(clickedCourseKey) {
var encodedCourseKey = encodeURIComponent(clickedCourseKey);
const emailElement = document.getElementsByClassName("email")[0];
const imageElement = document.getElementsByClassName('user')[0];
var email = emailElement.innerText;
var img = imageElement.src;

window.location.href =
          "pages/leetspace.html?courseKey=" +
          encodedCourseKey +
          "&email=" +
          email+"&img="+img;
      }
 newDiv.addEventListener("click", function () {
 redirectToNotes(courseKey);
        checkIfUserSignedIn();
      });
peopleSpacesElement.appendChild(newDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
var jsonUrl = "https://leetnote-7cfce-default-rtdb.firebaseio.com/courses.json";
var peopleCoursesElement = document.querySelector(".peopleCourses");
fetch(jsonUrl)
  .then((response) => {
 if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
return response.json();
  })
  .then((jsonData) => {
Object.keys(jsonData).forEach(function (courseKey) {
var newDiv2 = document.createElement("div");
      newDiv2.className = "scroll-item2";
 newDiv2.innerHTML = `
        <h2>${courseKey}</h2>
        <div style="display:flex;">
          <h3>9 contributors</h3>
          <h3>60/150</h3>
        </div>


<!-- Progress bar container -->
  <div class="progress-container">
    <!-- Progress bar filler -->
    <div class="progress-filler" style="width: 50%;">

</div>
  </div>
      `;
      function redirectToNotes2(clickedCourseKey) {
        console.log("display");
var encodedCourseKey = encodeURIComponent(clickedCourseKey);
        const emailElement = document.getElementsByClassName("email")[0];
        const imageElement = document.getElementsByClassName('user')[0];
        var email = emailElement.innerText;
        var img = imageElement.src;


 window.location.href =
          "pages/notes.html?courseKey=" + encodedCourseKey +
          "&email=" +
          email+"&img="+img;
      }
      newDiv2.addEventListener("click", function () {
redirectToNotes2(courseKey);
      });
  peopleCoursesElement.appendChild(newDiv2);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
// tobi was equaly here




// profile
document.addEventListener('DOMContentLoaded', function() {
  // Get the element with the class 'scroll-item2'
  var scrollItem = document.querySelector('img');

  // Add a click event listener to the element
  scrollItem.addEventListener('click', function() {
  // Call the signInWithGoogle function
console.log("user profile");
  }); 
});
