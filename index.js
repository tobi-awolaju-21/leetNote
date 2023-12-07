var myCourses = "https://leetnote-7cfce-default-rtdb.firebaseio.com/users/tobiawolaju21/courses.json";

var myCourseJson = "null"; // Default value is set to null
var myCourseJsonJSON = []; // Default value is set to an empty array




function oneOfMyCourses(course) {
  return myCourseJson.includes(course);
}


fetch(myCourses)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
     
    }
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
    myCourseJsonJSON = jsonData;
    myCourseJson = JSON.stringify(jsonData);

//starrt of update
const hardcodedCourses = myCourseJsonJSON;

const peopleCoursesElement = document.querySelector(".peopleCourses");

hardcodedCourses.forEach(course => {
  const { code } = course;

  const newDiv2 = document.createElement("div");
  newDiv2.className = "scroll-item2";
  newDiv2.innerHTML = `
    <h2>${code}</h2>
    <div style="display:flex;">
      <h3>9 contributors</h3>
      <h3>60/150</h3>
    </div>

    <!-- Progress bar container -->
    <div class="progress-container">
      <!-- Progress bar filler -->
      <div class="progress-filler" style="width: 50%;"></div>
    </div>
  `;

  function redirectToNotes2(clickedCourseKey) {
    console.log("display");
    const encodedCourseKey = encodeURIComponent(clickedCourseKey);
    const emailElement = document.getElementsByClassName("email")[0];
    const imageElement = document.getElementsByClassName('user')[0];
    const email = emailElement.innerText;
    const img = imageElement.src;

    window.location.href = `pages/notes.html?courseKey=${encodedCourseKey}&email=${email}&img=${img}`;
  }

  newDiv2.addEventListener("click", function () {
    redirectToNotes2(code);
  });

  peopleCoursesElement.appendChild(newDiv2);
});

//end of update

  });
  
  


function LoadContents(){
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
  if(oneOfMyCourses(courseKey)){

var newDiv = document.createElement("div");
      newDiv.className = "scroll-item";
 newDiv.innerHTML = `
    <div class="status">
      Live
    </div>
    <div class="status2">
      <p style="font-size: 20px;
      font-weight: 400;
      padding:0px;
      margin:0px; ">${courseKey}</p>
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
}
    });



  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });



}


LoadContents();