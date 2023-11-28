// load Spaces
// URL of the JSON data
var jsonUrl =
  "https://leetnote-7cfce-default-rtdb.firebaseio.com/classroom.json";

// Get the parent element by its class
var peopleSpacesElement = document.querySelector(".scroll-container");

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
    // Now you can work with the JSON data
    console.log(jsonData);

    // ...

    // Loop through each key in the JSON data
    Object.keys(jsonData).forEach(function (courseKey) {
      // Create a new div element
      var newDiv = document.createElement("div");
      newDiv.className = "scroll-item";

      // Set the content of the new div
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
        console.log("display");

        // Encode the clickedCourseKey value for URL
        var encodedCourseKey = encodeURIComponent(clickedCourseKey);

        // add the email too
        var email = emailElement.innerText;
        //rrrr
        // Redirect to notes.html with the courseKey and email added to the URL
        window.location.href =
          "pages/leetspace.html?courseKey=" +
          encodedCourseKey +
          "&email=" +
          email;
      }

      function redirectToNotes(clickedCourseKey) {
        console.log("display");

        // Encode the clickedCourseKey value for URL
        var encodedCourseKey = encodeURIComponent(clickedCourseKey);

        // add the email too rest my G
        const emailElement = document.getElementsByClassName("email")[0];
        var email = emailElement.innerText;

        // Redirect to notes.html with the courseKey and email added to the URL
        window.location.href =
          "pages/leetspace.html?courseKey=" +
          encodedCourseKey +
          "&email=" +
          email;
      }

      newDiv.addEventListener("click", function () {
        // Pass the courseKey to the redirectToNotes function
        redirectToNotes(courseKey);
        checkIfUserSignedIn();
      });

      // Append the new div to the parent element
      peopleSpacesElement.appendChild(newDiv);
    });

    // ...
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

// load courses
// URL of the JSON data
var jsonUrl = "https://leetnote-7cfce-default-rtdb.firebaseio.com/courses.json";

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
    // Now you can work with the JSON data
    console.log(jsonData);

    // Loop through each key in the JSON data
    Object.keys(jsonData).forEach(function (courseKey) {
      // Create a new div element
      var newDiv2 = document.createElement("div");
      newDiv2.className = "scroll-item2";

      // Set the content of the new div
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
        // Encode the clickedCourseKey value for URL
        var encodedCourseKey = encodeURIComponent(clickedCourseKey);

        // just a bunch of un need commits
        // add the email too rest my G
        const emailElement = document.getElementsByClassName("email")[0];
        var email = emailElement.innerText;
//work please
        window.location.href =
          "pages/notes.html?courseKey=" + encodedCourseKey + "&email=" + email;
      }
      newDiv2.addEventListener("click", function () {
        // Pass the courseKey to the redirectToNotes function
        redirectToNotes2(courseKey);
      });
      // Append the new div to the parent element
      peopleCoursesElement.appendChild(newDiv2);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
