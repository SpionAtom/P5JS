function preload() {
  myFont = loadFont('fonts/Baloo2-Regular.ttf');
}

function setup() {  

  createCanvas(xr, yr);
  noSmooth();
  screen = createGraphics(xr, yr, WEBGL);
  screen.noSmooth();

  frameRate(fps);
  game = new Game(this);
  onWindowResize();
  
  
}

function draw() {

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