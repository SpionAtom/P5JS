class Game {
  
  
  constructor(p) {
    //this.ground = yr - 25;
    //this.p = p;
    //this.player1 = new Player(xr / 2, 120, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW)
    

    var pos = createVector(0, 0);
    var vel = createVector(0, 0);
    var acc = createVector(0, 0);
    this.ship = new Ship(pos, vel, acc, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW);
    



  }
  
  update() {
    this.ship.update();
  }
  
  display(s) {
    s.background(127);

    // title
    s.strokeWeight(0);
    s.fill(255);
    s.textSize(18);	
    var title = "Asteroids";
    s.textFont(myFont);
    s.strokeWeight(0);
    s.stroke(255);
    s.text(title, -s.textWidth(title) / 2, -yr / 2 + s.textSize());
    this.ship.draw(s);	
  }
}