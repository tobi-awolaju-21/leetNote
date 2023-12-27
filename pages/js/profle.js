
async function checkSubscriptionStatus() {
    const currentPageUrl = window.location.search; // Use window.location.search instead of window.location.href
    const urlSearchParams = new URLSearchParams(currentPageUrl);
    
    const img = urlSearchParams.get('img');
    const email = urlSearchParams.get('email');

//set img and email to the right values
if (img) {
    const imgElement = document.getElementById('userImage');
    imgElement.src = img;
    imgElement.width = 200;
    imgElement.height = 200;
    imgElement.style.margin = '20px';
}

// Set the text content of the h1 element
if (email) {
    const emailElement = document.getElementById('emailAddress');
    emailElement.textContent = email;
}

  const apiEndpoint = "https://script.google.com/macros/s/AKfycbxgixYFP9fk9lfn_C7LKbkyP8-WWjoKqStk3Fi88JOJg5rSuHxXnUCxA1a91vstEr9vYg/exec?email=" + email;
  console.log(apiEndpoint+" niceProfile page");
  // Make a GET request to the API endpoint
  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      // Log the response data to the console
      console.log("API Response:", data);
  
      if (data === true) {
        console.log("This is a subscriber");
         // Get the reference to the div element
  var subscribeBtn = document.getElementById('subscribeBtn');

  // Set the display property to "none" to hide the div
  subscribeBtn.style.display = 'none';

// already a subscribber
        
      } else if (data === false) {
        console.log("Not a subscriber");

// you do not have any active subscribsion, sub

 // Get the reference to the div element
 var subscribeBtn = document.getElementById('subscribeBtn');

 // Set the display property to "none" to hide the div
 subscribeBtn.style.display = 'block';


      } else {
        console.log("Unexpected response from the server");
      }
  
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  
  
  
  
  }
  
  // Call the async function
  checkSubscriptionStatus();














  // profile Chart
  let jsonLength = 365;
let data;
let grid = 14;
let cellSize;
let hoveredCell = null;
let canvas;

function preload() {
  data = generateRandomData(jsonLength);
}

function setup() {
  // Create a canvas inside the specified div
  canvas = createCanvas(52 * grid, 7 * grid);
  canvas.parent('ProgressChart'); // Specify the parent div by its ID

  cellSize = width / 52;
  noStroke();
}

function draw() {
  background(255);

  for (let i = 0; i < 52; i++) {
    for (let j = 0; j < 7; j++) {
      let index = i + j * 52;
      let x = i * cellSize;
      let y = j * grid;

      let opacity = data[index].opacity * 255;

      strokeWeight(2.5);
      stroke(250, opacity, 250);
      let darkerGreen = color(250, opacity, 250);

      fill(darkerGreen);
      rect(x, y, cellSize, grid, 0);

      if (mouseX > x && mouseX < x + cellSize && mouseY > y && mouseY < y + grid) {
        hoveredCell = data[index].course;
        fill(150, 150, 255);
        stroke(150, 150, 255);
        rect(x, y, cellSize, grid);
      }
    }
  }

  if (hoveredCell) {
    strokeWeight(0);
    stroke(250);
    textSize(12);
    textAlign(CENTER, CENTER);

    fill(255, 255, 0);
    rect(mouseX - 60, mouseY - 10 - 20, 120, 20, 5);

    fill(0);
    text(hoveredCell, mouseX, mouseY - 20);
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    hoveredCell = null;
  }
}

function generateRandomData(length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push({
      course: getRandomCourse(),
      opacity: Math.random()
    });
  }
  return result;
}

function getRandomCourse() {
  let courses = ["Jan 21 | 13Q", "April 21 | 13Q", "Dec 19 | 13Q", "Feb 10 | 13Q"];
  return random(courses);
}
