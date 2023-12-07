
function startIndex(){

  var myCourseJson; // Default value is set to an 
  function oneOfMyCourses(course) {
    return myCourseJson.includes(course);
  }
  
  const emailElement = document.getElementsByClassName("email")[0];
  var email = emailElement.innerText;
  
  email = email.replace('@gmail.com', '');
  
  // get department via
  var getDepartment = "https://leetnote-7cfce-default-rtdb.firebaseio.com/users/" + email + ".json";
  
  fetch(getDepartment)
      .then(response => response.json())
      .then(data => {
          var department = data.department;
          usersCourse(department);
      })
      .catch(error => console.error('Error during fetch:', error));
  
  // get users course
  function usersCourse(department) {
      // get courses via
      var getCourses = "https://script.google.com/macros/s/AKfycbxwzQ_4MCVJKPsZCeAc7sradMu8VFIy6ab25-voByVkrKWJlIkgwqltXeOQHU0CYGjP/exec?department=" + department;
  
      fetch(getCourses)
          .then(response => response.json())
          .then(data => {
              console.log('Response from the server:', data);
             
              renderCourses(data);
              myCourseJson = data;
              LoadContents();
              
          })
          .catch(error => console.error('Error during fetch:', error));
  }
  
  // render Courses
  function renderCourses(coursesArray) {
      const peopleCoursesElement = document.querySelector(".peopleCourses");
  
      coursesArray.forEach(course => {
          const { code, progress } = course;
  
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
                  <div class="progress-filler" style="width: ${progress};"></div>
              </div>
          `;
  
          function handleCourseClick(clickedCourseCode) {
              const encodedCourseCode = encodeURIComponent(clickedCourseCode);
              const emailElement = document.getElementsByClassName("email")[0];
              const imageElement = document.getElementsByClassName('user')[0];
              const email = emailElement.innerText;
              const img = imageElement.src;
  
              window.location.href = `pages/notes.html?courseCode=${encodedCourseCode}&email=${email}&img=${img}`;
          }
  
          newDiv2.addEventListener("click", function () {
              handleCourseClick(code);
          });
  
          peopleCoursesElement.appendChild(newDiv2);
      });
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
  
}

