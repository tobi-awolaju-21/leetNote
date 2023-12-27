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