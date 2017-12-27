function setup() {
  screen = createGraphics(xr, yr);
  createCanvas(xr, yr);
  frameRate(fps);
  game = new Game(this);
  onWindowResize();
}

function draw() {
  clear();
  background(31);
  stroke(255);
  noFill();
  rect(0, 0, width - 1, height - 1);
  ellipse(width / 2, height / 2, min(width, height));
  
  game.update();
  drawScreen(screen);
  image(screen, screenStretchedX, screenStretchedY, screenStretchedWidth, screenStretchedHeight);
}

function windowResized() {
  onWindowResize();
}
function onWindowResize() {
    console.log("Resizising");
  
  resizeCanvas(windowWidth - 1, windowHeight - 1);
  
  // calculate new screen size and position
  screenStretchedWidth = windowWidth;
  screenStretchedHeight = windowWidth / screenRatio;
  if (screenStretchedHeight > windowHeight) {
    screenStretchedHeight = windowHeight;
    screenStretchedWidth = screenStretchedHeight * screenRatio;
  }
  screenStretchedX = (windowWidth - screenStretchedWidth) / 2;
  screenStretchedY = (windowHeight - screenStretchedHeight) / 2;
  

}

function drawScreen(s) {
  game.display(s);
}