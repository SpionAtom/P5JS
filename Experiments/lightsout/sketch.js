const tilesAmount = 5;
var gridX, gridY, tileSize;
var tiles = [];

function setup() {
  for (var i = 0; i < tilesAmount; i++) {
    for (var j = 0; j < tilesAmount; j++) {
      tiles.push(new Tile(i, j));
    }
  }
  createCanvas(windowWidth, windowHeight);
  windowResized();
}

function draw() {
  clear();
  background(127);
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].display();
  }
}

function mouseClicked() {
  for (var i = 0; i < tiles.length; i++) {
    if (tiles[i].mouseOver()) {
      invertTile(i);
    }
  }
}

function invertTile(i) {
  var vx = i % tilesAmount;
  var vy = floor(i / tilesAmount);

  tiles[i].s = !tiles[i].s;

  if (vx > 0) {
    tiles[i - 1].s = !tiles[i - 1].s;
  }
  if (vx < tilesAmount - 1) {
    tiles[i + 1].s = !tiles[i + 1].s;
  }
  if (vy > 0) {
    tiles[i - tilesAmount].s = !tiles[i - tilesAmount].s;
  }
  if (vy < tilesAmount - 1) {
    tiles[i + tilesAmount].s = !tiles[i + tilesAmount].s;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  tileSize = min(windowWidth, windowHeight) / tilesAmount;
  gridX = (windowWidth - tileSize * tilesAmount) / 2;
  gridY = (windowHeight - tileSize * tilesAmount) / 2;
}

// Tile class
function Tile(x, y) {
  this.x = x;
  this.y = y;
  this.s = true;
  this.c = 255;
  
  this.display = function() {
    if (this.s && this.mouseOver()) {
      fill(233);
    }
    if (this.s && !this.mouseOver()) {
      fill(255);
    }
    if (!this.s && this.mouseOver()) {
      fill(33);
    }
    if (!this.s && !this.mouseOver()) {
      fill(0);
    }
    
    stroke(0);
    rect(gridX + this.x * tileSize, gridY + this.y * tileSize, tileSize, tileSize);
  }
  
  this.mouseOver = function() {
    return (mouseX >= gridX + this.x * tileSize && mouseY > gridY + this.y * tileSize && mouseX < gridX + this.x * tileSize + tileSize && mouseY < gridY + this.y * tileSize + tileSize);
  }
  
  
}