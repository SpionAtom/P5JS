function preload() {
  myFont = loadFont('fonts/VT323-Regular.ttf');
}

function setup() {  

  createCanvas(xr, yr);  
  noSmooth();
  screen = createGraphics(xr, yr, WEBGL);
  screen.noSmooth();
  screen.translate(-screen.width / 2, -screen.height / 2, 0); // move origin to top left, otherwise it is in the center bc of WEBGL.

  frameRate(fps);
  game = new Game(this);
  onWindowResize();
  
  
}

function draw() {

  game.update();
  background(127);
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
  push();
  game.display(s);
  pop();
}